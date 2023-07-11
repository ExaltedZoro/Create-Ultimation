// priority: 5

	// External Sequencing Script Version: 1.1.0
	/*
		TODO
	
		Send External Step Recipe IDs from Server to Client to hide
		
		Tooltip system for Ext Sequence recipes when Create is not installed (aka the -C edition)
		
		Option to not send First Loop and/or Final Step Recipe IDs
	*/
	
	//Sequencing
	var packID = 'ultimation';
	var autoHideExtSteps = true;
	
	var createLoaded = Platform.isLoaded('create');
	var extStepRecipeIDs = [];
	
	if(!createLoaded){
		console.log('Create not found! only External Sequencing is available without Create!');
	}
	
	global.sequenceRecipeIDsToHide = [];

	/**
	@param {ItemStackJS[] / string[]} outputs
	@param {IngredientJS / string} base
	@param {map[]} sequence
	@param {int} seqLoops
	@param {string} transitional
	@param {string} id
	@param {RecipeEventJS} event
	*/
	const addExtSequenceRecipe = (outputs, base, sequence, seqLoops, transitional, id, event) => {
		
		let constructedSequence = [];
		let sequenceStep = 1;
		let totalSteps = sequence.length * seqLoops;
		
		console.log('Beginning addition of Recipe \''+ packID +':sequencing/'+ id +'\' with '+ sequence.length +' Steps and '+ seqLoops +' Loops. (total of '+ totalSteps +' steps)');
		
		sequence.forEach((step) => {
			
			let estStep = sequenceStep;
			
			// Normal Sequencing steps
			if(createLoaded){
				switch(step.type) {
					case 'deploy':
						constructedSequence.push(event.recipes.createDeploying(transitional, [transitional, step.input]));
						break;
					case 'press':
						constructedSequence.push(event.recipes.createPressing(transitional, transitional));
						break;
					case 'cut':
						constructedSequence.push(event.recipes.createCutting(transitional, transitional).processingTime(step.time));
						break;
					case 'fill':
						constructedSequence.push(event.recipes.createFilling(transitional, [transitional, step.fluid]));
						break;
					case 'external':
						break;
					default:
						console.log(`Invalid Step Type "${step.type}" in sequenced recipe "${id}"!`);
						break;
				}
			}
			//External Sequencing
			if(step.type == 'external'){
				
				//Dummy Lore Assembly
				if(createLoaded){
					let constructedLore = [];
					let newPart = '';

					// Construct Lore data from Info array
					step.info.forEach((component) => {
						if(component.length > 0) newPart = Utils.listOf(component).toJson();
						if(component.length == undefined) newPart = Utils.mapOf(component).toJson();
						constructedLore.push(`'${newPart}'`);

						// Old lore system, it's sitting here if you need to use it for retrofitting, but this will be taken out next version
						/*
						component.split('|').forEach((part) => {
							let info = part.split("%$");
							newPart.push(`{"text": "${info[1]}", "color": "${info[0]}"}`);
						})
						constructedLore.push('\'['+ newPart.toString() +']\'');
						//*/
					})
					// Push Dummy step to Sequence
					constructedSequence.push(event.recipes.createDeploying(transitional, [transitional, Item.of(step.dummy, `{display:{Lore:[${constructedLore}]},Unobtainble:1b}`)]));
				}
				
				// Begin creating External Step(s)
				
				while (estStep <= totalSteps) {
					//Determine Progress float values for Input and Output of upcoming recipe
					let estProgress = (1 / (totalSteps / (estStep - 1))) + 'f';
					let nextProgress = (1 / (totalSteps / estStep)) + 'f';
					
					let genID = `${packID}:external_sequencing/${id}/step_${estStep}`;
					
					extStepRecipeIDs.push(genID);
					
					global.sequenceRecipeIDsToHide.push(genID);
					
					let preItem = '';
					let postItem = '';
					
					//Check if current Step is the first, if it is, use the "Base" item as the Input of the step
					if(sequenceStep != 1){
						preItem = Item.of(transitional, `{SequencedAssembly:{Progress:${estProgress},Step:${(estStep -1)},id:"${packID}:sequencing/${id}"}}`);
					} else {
						preItem = base;
					}
					
					//Check if current Step is the last, if it is, use the first "Output" item as the Result of the step
					if(estStep != totalSteps){
						postItem = Item.of(transitional, `{SequencedAssembly:{Progress:${nextProgress},Step:${estStep},id:"${packID}:sequencing/${id}"}}`);
					} else if(step.outputisarray){
						//this is technically a useless feature, since you can achieve the same effect by defining other items in the final step's recipe, but it's nice for consolidating i guess?
						postItem = outputs;
					} else {
						postItem = outputs[0];
					}
					
					//Convert item info to JSON format if value of "json_format" element in step info is true
					if(step.json_format){
						preItem = preItem.toJson();
						postItem = postItem.toJson();
					} else if(step.json_format == 'undefined'){
						console.warn(`External Step #${estStep} in recipe "${genID}" does not have a json_format flag, this may cause errors!`);
					}
					
					//Log External Sequence step info
					console.log(`Adding EXT Sequence Step #${estStep} : ${preItem} --TO-> ${postItem}`);
					
					//Run step recipe
					step.recipedata(postItem, preItem, genID);
					
					//Increase the value of "estStep" as long as it is less than the value of "totalSteps", to make the while loop end when recipes for each loop are registered for this step
					if(estStep <= totalSteps){
						estStep += sequence.length;
					}
				}
				
			}
			//Move to next Step
			sequenceStep++;
		})
		//Register Sequence Recipe
		if(createLoaded){
			event.recipes.createSequencedAssembly(outputs, base, constructedSequence).loops(seqLoops).transitionalItem(transitional).id(`${packID}:sequencing/${id}`);
		}
	}
	

onEvent('recipes', (event) => {
	// Example of Ext Sequence Recipe using JSON-based and KJS builtin/Functions
	addExtSequenceRecipe(["ae2:silicon"], "minecraft:sand",
		[
			{
				"type": "external",
				"dummy": "create:crushing_wheel",
				"info": [[{"text": "Process in a pair of ", "color": "white"}, {"text": "Crushing Wheels!", "color": "aqua"}]],
				"json_format": false,
				"recipedata": (post, pre, id) => event.recipes.createCrushing(post, pre).id(id)
			},
			{
				"type": "press"
			},
			{
				"type": "external",
				"dummy": "thermal:machine_centrifuge",
				"info": [[{"text": "Process in a ", "color": "white"}, {"text": "Centrifugal Separator!", "color": "aqua"}]],
				"json_format": false,
				"recipedata": (post, pre, id) => event.recipes.thermal.centrifuge([post, Fluid.of("ultimation:fine_sand", 250)], pre).id(id)
			},
			{
				"type": "fill",
				"fluid": Fluid.of("ultimation:pure_silicon", 125)
			},
			{
				"type": "external",
				"dummy": "create:mechanical_press",
				"info": [[{"text": "Process with a ", "color": "white"}, {"text": "Mechanical Press ", "color": "aqua"}, {"text": "in a ", "color": "white"}, {"text": "heated ", "color": "red"}, {"text": "Basin!", "color": "aqua"}]],
				"json_format": false,
				"recipedata": (post, pre, id) => event.recipes.createCompacting(post, pre).heated().id(id)
			}
		],
	1, "ultimation:incomplete_silicon", "silicon", event)

addExtSequenceRecipe(["create:chromatic_compound"], "create:powdered_obsidian",
		[
			{
				"type": "press"
			},
			{
				"type": "external",
				"dummy": "createaddition:rolling_mill",
				"info": [[{"text": "Send through a ", "color": "white"}, {"text": "Rolling Mill", "color": "aqua"}]],
				"json_format": true,
				"recipedata": (post, pre, id) => event.custom({type: "createaddition:rolling", input: pre, result: post}).id(id)
			},
			{
				"type": "deploy",
				"input": "#forge:dyes"
			},
			{
				"type": "external",
				"dummy": "thermal:machine_bottler",
				"info": [[{"text": "Cover in ", "color": "white"}, {"text": "Ink", "color": "aqua"}]],
				"json_format": false,
				"recipedata": (post, pre, id) => event.recipes.thermal.bottler(post, [pre, Fluid.of("create_enchantment_industry:ink", 250)]).id(id)
			}
		],
	1, "create:incomplete_chromatic_compound", "chromatic_compound", event)

	/*/addExtSequenceRecipe(['minecraft:diamond'], 'minecraft:gravel',
		[
			{
				'type': 'press'
			},
			{
				'type': 'cut',
				'time': 50
			},
			{
				'type': 'external',
				'dummy': 'minecraft:smithing_table',
				'info': [{
					'translate': `${packID}.external_sequencing.extsequence_test.3.smithing.info`,
					'color': 'gold',
					'bold': true
				}],
				'json_format': true,
				'recipedata': (post, pre, id) => event.custom({
					//Smithing is funky since it copies the base's NBT to the output, so you need to put the input as the secondary, and can't have NBT on the base, unless you want to have an impossible step
					'type': 'minecraft:smithing',
					'base': { 'item': 'minecraft:iron_bars' },
					'addition': pre,
					'result': post
				}).id(id)
			},
			{
				'type': 'fill',
				'fluid': Fluid.of('minecraft:water', 500)
			},
			{
				'type': 'deploy',
				'input': 'minecraft:iron_ingot'
			},
			{
				'type': 'external',
				'dummy': 'minecraft:furnace',
				//Vanilla Text Components are used for dummy info, grants you incredible control over how they appear, with little effort on my end :p
				'info': [
					[{
						'text': 'Process item in ',
						'color': '#FF0000'
					},
					{
						'text': 'this ',
						'color': 'aqua'
					},
					{
						'text': 'Device!',
						'color': '#FF0000'
					}],
					[{
						'text': 'Smoker and Blast Furnace ',
						'color': 'gold'
					},
					{
						'text': 'are not valid!',
						'color': 'red'
					}]
				],
				'json_format': false,
				'recipedata': (post, pre, id) => event.smelting(post, pre).id(id)
			}
		],
	1, 'minecraft:flint', 'extsequence_test', event)
	//*/

	// Example using recipetype that supports full output Arrays as final step.
	/*
	addExtSequenceRecipe(['minecraft:dirt', 'minecraft:grass'], 'minecraft:grass_block',
		[
			{
				'type': 'press'
			},
			{
				'type': 'external',
				'dummy': 'create:millstone',
				'info': [
					{
						'text': 'Centrifuge in a Mechanical Mixer.',
						'color': 'gold'
					},
					[{
						'text': 'This step outputs ',
						'color': 'gold'
					},
					{
						'text': 'Multiple items!',
						'color': '#DB3DD6'
					}]
				],
				'outputisarray': true,
				'json_format': false,
				'recipedata': (post, pre, id) => event.recipes.createMixing(post, [pre]).id(id)
			}
		],
	1, 'minecraft:grass_block', 'extsequence/outputisarray_showcase', event)
	//*/
})