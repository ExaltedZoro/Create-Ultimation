onEvent("recipes", event => {

    //Mixer
    colours.forEach(element => {
		event.recipes.createMixing("2x minecraft:"+element+"_dye", ["mekanism:dye_base", "minecraft:"+element+"_dye"]).id("create/mixing/"+element+"_dye_dupe")
	})

	event.recipes.createMixing("thermal:steel_dust", ["minecraft:iron_ingot", "2x minecraft:coal"]).heated().id("create:mixing/coal_steel")
	event.recipes.createMixing("thermal:steel_dust", ["minecraft:iron_ingot", "thermal:coal_coke"]).heated().id("create:mixing/coke_steel")

	event.recipes.createMixing(Fluid.of("thermal:latex", 250), [Fluid.of("minecraft:water", 250), "minecraft:jungle_log"]).id("create:mixing/latex")
	event.recipes.createMixing("create:veridium", [Fluid.of("minecraft:lava", 250), "minecraft:cobbled_deepslate", "minecraft:copper_nugget"]).id("create:mixing/veridium")
	event.recipes.createMixing("create:crimsite", [Fluid.of("minecraft:lava", 250), "minecraft:cobbled_deepslate", "minecraft:iron_nugget"]).id("create:mixing/crimsite")
	event.recipes.createMixing("create:ochrum", [Fluid.of("minecraft:lava", 250), "minecraft:cobbled_deepslate", "minecraft:gold_nugget"]).id("create:mixing/ochrum")
	event.recipes.createMixing("create:asurine", [Fluid.of("minecraft:lava", 250), "minecraft:cobbled_deepslate", "create:zinc_nugget"]).id("create:mixing/asurine")
	event.recipes.createMixing(Fluid.of("thermal:refined_fuel", 125), [Fluid.of("minecraft:lava", 250), Fluid.of("thermal:light_oil", 300)]).id("create:mixing/light_refined_fuel")
	event.recipes.createMixing(Fluid.of("thermal:refined_fuel", 125), [Fluid.of("minecraft:lava", 250), Fluid.of("thermal:heavy_oil", 200)]).id("create:mixing/heavy_refined_fuel")
	event.recipes.createMixing([Fluid.of("thermal:light_oil", 60), Fluid.of("thermal:heavy_oil", 40), Item.of("thermal:bitumen").withChance(0.1)], Fluid.of("thermal:crude_oil", 100)).heated().id("create:mixing/crude_oil")
    event.recipes.createMixing("mekanism:alloy_infused", ["#forge:ingots/steel", Fluid.of("tconstruct:molten_signalum", 10)]).heated().id("create:mixing/infused_alloy")
    event.recipes.createMixing("ultimation:red_amethyst", ["minecraft:amethyst_shard", "minecraft:red_dye"]).id("create:mixing/red_amethyst")
	event.recipes.createMixing("create:zinc_nugget", Fluid.of("minecraft:water", 1000)).heated().id("create:mixing/zinc_nugget")

	event.recipes.createMixing("3x thermal:invar_ingot", ["2x minecraft:iron_ingot", "thermal:nickel_ingot"]).id("create:mixing/invar_ingot").heated()
	event.recipes.createMixing("2x thermal:constantan_ingot", ["minecraft:copper_ingot", "thermal:nickel_ingot"]).id("create:mixing/constantan_ingot").heated()
	event.recipes.createMixing("2x thermal:electrum_ingot", ["minecraft:gold_ingot", "thermal:silver_ingot"]).id("create:mixing/electrum_ingot").heated()
	event.recipes.createMixing("4x thermal:bronze_ingot", ["3x minecraft:copper_ingot", "thermal:tin_ingot"]).id("create:mixing/bronze_ingot").heated()

    event.recipes.createMixing(Fluid.of("tconstruct:molten_brass", 90), [Fluid.of("tconstruct:molten_copper", 45), Fluid.of("tconstruct:molten_zinc", 45)]).id("create:mixing/molten_brass")
    event.recipes.createMixing(Fluid.of("tconstruct:molten_invar", 90), [Fluid.of("tconstruct:molten_iron", 60), Fluid.of("tconstruct:molten_nickel", 30)]).id("create:mixing/molten_invar")
	event.recipes.createMixing(Fluid.of("tconstruct:molten_constantan", 90), [Fluid.of("tconstruct:molten_copper", 45), Fluid.of("tconstruct:molten_nickel", 45)]).id("create:mixing/molten_constantan")
	event.recipes.createMixing(Fluid.of("tconstruct:molten_electrum", 90), [Fluid.of("tconstruct:molten_gold", 45), Fluid.of("tconstruct:molten_silver", 45)]).id("create:mixing/molten_electrum")
	event.recipes.createMixing(Fluid.of("tconstruct:molten_bronze", 180), [Fluid.of("tconstruct:molten_copper", 135), Fluid.of("tconstruct:molten_tin", 45)]).id("create:mixing/molten_bronze")

	event.recipes.createMixing(Fluid.of("tconstruct:molten_signalum", 180), ["2x minecraft:copper_ingot", "create:chromatic_compound", Fluid.of("thermal:redstone", 200)]).superheated().id("create:mixing/molten_signalum")
	event.recipes.createMixing(Fluid.of("tconstruct:molten_lumium", 180), ["2x minecraft:gold_ingot", "create:chromatic_compound", Fluid.of("thermal:glowstone", 500)]).superheated().id("create:mixing/molten_lumium")
	event.recipes.createMixing(Fluid.of("tconstruct:molten_enderium", 180), ["2x #forge:ingots/lead", "create:chromatic_compound", Fluid.of("thermal:ender", 500)]).superheated().id("create:mixing/molten_enderium")

	event.recipes.createMixing("ultimation:blue_quartz", [Fluid.of("minecraft:water", 250), "minecraft:quartz"]).id("create:mixing/blue_quartz")
	event.recipes.createMixing("create:rose_quartz", [Fluid.of("minecraft:lava", 250), "minecraft:quartz"]).id("create:mixing/rose_quartz")

	//Compacting
	event.recipes.createCompacting("minecraft:coal", ["2x minecraft:charcoal"]).id("create:compacting/charcoal")
	event.recipes.createCompacting("minecraft:diamond", ["16x minecraft:coal"]).heated().id("create:compacting/diamond")

	event.recipes.createCompacting("create:blaze_cake_base", "8x create:cinder_flour").id("create:compacting/blaze_cake")

	//Sawing
	event.recipes.createCutting("ae2:printed_logic_processor", "minecraft:gold_ingot").id("create:cutting/printed_logic_processor")
	event.recipes.createCutting("ae2:printed_calculation_processor", "ultimation:blue_quartz").id("create:cuting/printed_calculation_processor")
	event.recipes.createCutting("ae2:printed_engineering_processor", "minecraft:diamond").id("create:cutting/printed_engineering_processor")

	//Crushing
	event.recipes.createCrushing(["minecraft:raw_iron", Item.of("minecraft:raw_iron").withChance(0.6)], "create:crimsite").id("create:crushing/crimsite")
    event.recipes.createCrushing(["minecraft:raw_iron", Item.of("minecraft:raw_iron").withChance(0.6)], "#create:stone_types/crimsite").id("create:crushing/crimsite_recycling")
	event.recipes.createCrushing(["minecraft:raw_copper", Item.of("minecraft:raw_copper").withChance(0.6)], "create:veridium").id("create:crushing/veridium")
    event.recipes.createCrushing(["minecraft:raw_copper", Item.of("minecraft:raw_copper").withChance(0.6)], "#create:stone_types/veridium").id("create:crushing/veridium_recycling")
    event.recipes.createCrushing(["minecraft:raw_gold", Item.of("minecraft:raw_gold").withChance(0.6)], "create:ochrum").id("create:crushing/ochrum")
    event.recipes.createCrushing(["minecraft:raw_gold", Item.of("minecraft:raw_gold").withChance(0.6)], "#create:stone_types/ochrum").id("create:crushing/ochrum_recycling")
    event.recipes.createCrushing(["create:raw_zinc", Item.of("create:raw_zinc").withChance(0.6)], "create:asurine").id("create:crushing/asurine")
    event.recipes.createCrushing(["create:raw_zinc", Item.of("create:raw_zinc").withChance(0.6)], "#create:stone_types/asurine").id("create:crushing/asurine_recycling")
    event.recipes.createCrushing("8x minecraft:amethyst_shard", "minecraft:amethyst_cluster").id("create:crushing/amethyst_cluster")
	event.recipes.createCrushing("8x fluxnetworks:flux_dust", "create:ender_mechanism").id("ultimation:flux_dust")
	event.recipes.createCrushing("mekanism:dust_coal", "minecraft:coal").id("create:crushing/coal_dust")
	event.recipes.createCrushing("mekanism:dust_charcoal", "minecraft:charcoal").id("create:crushing/charcoal_dust")
	event.recipes.createCrushing(["minecraft:red_sand", "minecraft:copper_nugget"], "minecraft:terracotta").id("create:crushing/terracotta")

	//Filling
	event.recipes.createFilling("create:blaze_cake", ["create:blaze_cake_base", Fluid.of("thermal:refined_fuel", 125)]).id("create:filling/blaze_cake")
    event.recipes.createFilling("create:electron_tube", [Fluid.of("tconstruct:molten_iron", 30), "ultimation:red_amethyst"]).id("ultimation:electron_tube")

	//Deploying
	let overworldDataDeploying = (type) => {
		event.recipes.createDeploying(
			["hostilenetworks:overworld_prediction",
			Item.of("hostilenetworks:prediction", {data_model:{id:"hostilenetworks:"+type}}).withChance(0.05)],
			["hostilenetworks:empty_prediction",
			Item.of("hostilenetworks:data_model", {data_model:{id: "hostilenetworks:"+type, data: 6}})]).keepHeldItem(true).id("ultimation:"+type+"_basic_model")
		event.recipes.createDeploying(
			["hostilenetworks:overworld_prediction",
			Item.of("hostilenetworks:prediction", {data_model:{id:"hostilenetworks:"+type}}).withChance(0.22)],
			["hostilenetworks:empty_prediction",
			Item.of("hostilenetworks:data_model", {data_model:{id: "hostilenetworks:"+type, data: 54}})]).keepHeldItem(true).id("ultimation:"+type+"_advanced_model")
		event.recipes.createDeploying(
			["hostilenetworks:overworld_prediction",
			Item.of("hostilenetworks:prediction", {data_model:{id:"hostilenetworks:"+type}}).withChance(0.65)],
			["hostilenetworks:empty_prediction",
			Item.of("hostilenetworks:data_model", {data_model:{id: "hostilenetworks:"+type, data: 354}})]).keepHeldItem(true).id("ultimation:"+type+"_superior_model")
		event.recipes.createDeploying(
			["hostilenetworks:overworld_prediction",
			Item.of("hostilenetworks:prediction", {data_model:{id:"hostilenetworks:"+type}}).withChance(0.99)],
			["hostilenetworks:empty_prediction",
			Item.of("hostilenetworks:data_model", {data_model:{id: "hostilenetworks:"+type, data: 1254}})]).keepHeldItem(true).id("ultimation:"+type+"_selfaware_model")
	}

    let netherDataDeploying = (type) => {
		event.recipes.createDeploying(
			["hostilenetworks:nether_prediction",
			Item.of("hostilenetworks:prediction", {data_model:{id:"hostilenetworks:"+type}}).withChance(0.05)],
			["hostilenetworks:empty_prediction",
			Item.of("hostilenetworks:data_model", {data_model:{id: "hostilenetworks:"+type, data: 6}})]).keepHeldItem(true).id("ultimation:"+type+"_basic_model")
		event.recipes.createDeploying(
			["hostilenetworks:nether_prediction",
			Item.of("hostilenetworks:prediction", {data_model:{id:"hostilenetworks:"+type}}).withChance(0.22)],
			["hostilenetworks:empty_prediction",
			Item.of("hostilenetworks:data_model", {data_model:{id: "hostilenetworks:"+type, data: 54}})]).keepHeldItem(true).id("ultimation:"+type+"_advanced_model")
		event.recipes.createDeploying(
			["hostilenetworks:nether_prediction",
			Item.of("hostilenetworks:prediction", {data_model:{id:"hostilenetworks:"+type}}).withChance(0.65)],
			["hostilenetworks:empty_prediction",
			Item.of("hostilenetworks:data_model", {data_model:{id: "hostilenetworks:"+type, data: 354}})]).keepHeldItem(true).id("ultimation:"+type+"_superior_model")
		event.recipes.createDeploying(
			["hostilenetworks:nether_prediction",
			Item.of("hostilenetworks:prediction", {data_model:{id:"hostilenetworks:"+type}}).withChance(0.99)],
			["hostilenetworks:empty_prediction",
			Item.of("hostilenetworks:data_model", {data_model:{id: "hostilenetworks:"+type, data: 1254}})]).keepHeldItem(true).id("ultimation:"+type+"_selfaware_model")
	}

    let endDataDeploying = (type) => {
		event.recipes.createDeploying(
			["hostilenetworks:end_prediction",
			Item.of("hostilenetworks:prediction", {data_model:{id:"hostilenetworks:"+type}}).withChance(0.05)],
			["hostilenetworks:empty_prediction",
			Item.of("hostilenetworks:data_model", {data_model:{id: "hostilenetworks:"+type, data: 6}})]).keepHeldItem(true).id("ultimation:"+type+"_basic_model")
		event.recipes.createDeploying(
			["hostilenetworks:end_prediction",
			Item.of("hostilenetworks:prediction", {data_model:{id:"hostilenetworks:"+type}}).withChance(0.22)],
			["hostilenetworks:empty_prediction",
			Item.of("hostilenetworks:data_model", {data_model:{id: "hostilenetworks:"+type, data: 54}})]).keepHeldItem(true).id("ultimation:"+type+"_advanced_model")
		event.recipes.createDeploying(
			["hostilenetworks:end_prediction",
			Item.of("hostilenetworks:prediction", {data_model:{id:"hostilenetworks:"+type}}).withChance(0.65)],
			["hostilenetworks:empty_prediction",
			Item.of("hostilenetworks:data_model", {data_model:{id: "hostilenetworks:"+type, data: 354}})]).keepHeldItem(true).id("ultimation:"+type+"_superior_model")
		event.recipes.createDeploying(
			["hostilenetworks:end_prediction",
			Item.of("hostilenetworks:prediction", {data_model:{id:"hostilenetworks:"+type}}).withChance(0.99)],
			["hostilenetworks:empty_prediction",
			Item.of("hostilenetworks:data_model", {data_model:{id: "hostilenetworks:"+type, data: 1254}})]).keepHeldItem(true).id("ultimation:"+type+"_selfaware_model")
	}

    overworld_models.forEach(overworldDataDeploying)
    nether_models.forEach(netherDataDeploying)
    end_models.forEach(endDataDeploying)

	event.recipes.createDeploying("ae2:logic_processor", ["create:digital_mechanism", "ae2:printed_logic_processor"]).id("create:deploying/logic_processor")
	event.recipes.createDeploying("ae2:calculation_processor", ["create:digital_mechanism", "ae2:printed_calculation_processor"]).id("create:deploying/calculation_processor")
	event.recipes.createDeploying("ae2:engineering_processor", ["create:digital_mechanism", "ae2:printed_engineering_processor"]).id("create:deploying/engineering_processor")

	//Milling
    event.recipes.createMilling(Item.of("minecraft:raw_iron").withChance(0.8), "create:crimsite").id("create:milling/crimsite")
	event.recipes.createMilling(Item.of("minecraft:raw_copper").withChance(0.8), "create:veridium").id("create:milling/veridium")
    event.recipes.createMilling(Item.of("minecraft:raw_gold").withChance(0.8), "create:ochrum").id("create:milling/ochrum")
    event.recipes.createMilling(Item.of("create:raw_zinc").withChance(0.8), "create:asurine").id("create:milling/asurine")
    event.recipes.createMilling(["2x minecraft:amethyst_shard", Item.of("minecraft:amethyst_shard").withChance(0.5)], "minecraft:amethyst_cluster").id("create:milling/amethyst_cluster")
	event.recipes.createMilling(Item.of("minecraft:sand").withChance(0.5), "minecraft:gravel").id("create:milling/gravel")
	event.recipes.createMilling("mekanism:dust_coal", "minecraft:coal").id("create:milling/coal_dust")
	event.recipes.createMilling("mekanism:dust_charcoal", "minecraft:charcoal").id("create:milling/charcoal_dust")

	//Sequenced Assemblies
	 event.recipes.createSequencedAssembly(
        "minecraft:small_amethyst_bud",
        "minecraft:amethyst_shard",
        [
            event.recipes.createFilling("minecraft:amethyst_cluster", ["minecraft:amethyst_shard", Fluid.of("minecraft:water", 250)])
        ]
    ).transitionalItem("minecraft:amethyst_shard").loops(4).id("ultimation:small_bud")

	event.recipes.createSequencedAssembly(
        "minecraft:medium_amethyst_bud",
        "minecraft:small_amethyst_bud",
        [
            event.recipes.createFilling("minecraft:amethyst_cluster", ["minecraft:amethyst_shard", Fluid.of("minecraft:water", 250)])
        ]
    ).transitionalItem("minecraft:small_amethyst_bud").loops(4).id("ultimation:medium_bud")

	event.recipes.createSequencedAssembly(
        "minecraft:large_amethyst_bud",
        "minecraft:medium_amethyst_bud",
        [
            event.recipes.createFilling("minecraft:amethyst_cluster", ["minecraft:amethyst_shard", Fluid.of("minecraft:water", 250)])
        ]
    ).transitionalItem("minecraft:medium_amethyst_bud").loops(4).id("ultimation:large_bud")

	event.recipes.createSequencedAssembly(
        "minecraft:amethyst_cluster",
        "minecraft:large_amethyst_bud",
        [
            event.recipes.createFilling("minecraft:amethyst_cluster", ["minecraft:amethyst_shard", Fluid.of("minecraft:water", 250)])
        ]
    ).transitionalItem("minecraft:large_amethyst_bud").loops(4).id("ultimation:amethyst_cluster")

    //Mechanical Crafting
	event.recipes.createMechanicalCrafting("ae2:singularity", ["111", "121", "111"], {1: "compressium:cobblestone_1", 2: "compressium:cobblestone_2"}).id("create:mechanical_crafting/singularity")
	event.recipes.createMechanicalCrafting("thermal:rf_coil", ["G", "R", "G"], {G: "minecraft:gold_nugget", R: "ultimation:redstone_crystal"}).id("create:mechanical_crafting/rf_coil")

	//Creative Items
	event.recipes.createMixing("create:creative_blaze_cake", ["16x create:blaze_cake", "8x create:ultimate_mechanism", Fluid.of("ultimation:molten_nether_star", 160)]).superheated().id("ultimation:creative_blaze_cake")

	event.recipes.createMechanicalCrafting("create:creative_motor",
	["  S  ", "MMEMM", "MTTTM", "MTCTM", "MTTTM", "MMMMM"],
	{M: "create:ultimate_mechanism", S: "create:shaft", C: "create:creative_blaze_cake", E: "createaddition:electric_motor", T: "createaddition:tesla_coil"}).id("ultimation:creative_motor")

	event.recipes.createMechanicalCrafting("create:creative_fluid_tank",
	["MMMMM", "MTTTM", "MTSTM", "MTTTM", "MMMMM"],
	{M: "create:ultimate_mechanism", T: "create:fluid_tank", S: "minecraft:nether_star"}).id("ultimation:creative_tank")

	//Washing
	event.recipes.createSplashing(Item.of("minecraft:redstone").withChance(0.5), "minecraft:red_sand").id("create:splashing/red_sand")
	event.recipes.createSplashing("mekanism:dye_base", "minecraft:clay_ball").id("create:splashing/dye_base")
	event.recipes.createSplashing(Item.of("sophisticatedstorage:chest", {woodType: "oak"}), Item.of("sophisticatedstorage:chest").ignoreNBT()).id("create:washing/chest_washing")
	event.recipes.createSplashing(Item.of("sophisticatedstorage:barrel", {woodType: "oak"}), Item.of("sophisticatedstorage:barrel").ignoreNBT()).id("create:washing/barrel_washing")
	event.recipes.createSplashing(Item.of("sophisticatedstorage:iron_chest", {woodType: "oak"}), Item.of("sophisticatedstorage:iron_chest").ignoreNBT()).id("create:washing/iron_chest_washing")
	event.recipes.createSplashing(Item.of("sophisticatedstorage:iron_barrel", {woodType: "oak"}), Item.of("sophisticatedstorage:iron_barrel").ignoreNBT()).id("create:washing/iron_barrel_washing")
	event.recipes.createSplashing(Item.of("sophisticatedstorage:gold_chest", {woodType: "oak"}), Item.of("sophisticatedstorage:gold_chest").ignoreNBT()).id("create:washing/gold_chest_washing")
	event.recipes.createSplashing(Item.of("sophisticatedstorage:gold_barrel", {woodType: "oak"}), Item.of("sophisticatedstorage:gold_barrel").ignoreNBT()).id("create:washing/gold_barrel_washing")
	event.recipes.createSplashing(Item.of("sophisticatedstorage:diamond_chest", {woodType: "oak"}), Item.of("sophisticatedstorage:diamond_chest").ignoreNBT()).id("create:washing/diamond_chest_washing")
	event.recipes.createSplashing(Item.of("sophisticatedstorage:diamond_barrel", {woodType: "oak"}), Item.of("sophisticatedstorage:diamond_barrel").ignoreNBT()).id("create:washing/diamond_barrel_washing")
	event.recipes.createSplashing(Item.of("sophisticatedstorage:netherite_chest", {woodType: "oak"}), Item.of("sophisticatedstorage:netherite_chest").ignoreNBT()).id("create:washing/netherite_chest_washing")
	event.recipes.createSplashing(Item.of("sophisticatedstorage:netherite_barrel", {woodType: "oak"}), Item.of("sophisticatedstorage:netherite_barrel").ignoreNBT()).id("create:washing/netherite_barrel_washing")
	event.recipes.createSplashing("minecraft:packed_ice", "minecraft:ice").id("create:washing/packed_ice")
	event.recipes.createSplashing("minecraft:blue_ice", "minecraft:packed_ice").id("create:washing/blue_ice")


	//Blasting

	//Smoking
	event.smoking("minecraft:red_sand", "minecraft:sand").id("minecraft:smoking/red_sand")
	event.smoking("minecraft:blaze_powder", "create:cinder_flour").id("minecraft:smoking/blaze_powder")

	//Haunting
	event.recipes.createHaunting("thermal:crude_oil_bucket", "thermal:creosote_bucket").id("create:haunting/crude_oil")
	event.recipes.createHaunting("minecraft:netherrack", "minecraft:clay").id("create:haunting/netherrack")

	//Extruder Recipes
	event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:andesite'), [Fluid.of("minecraft:water", 1000), Fluid.of('minecraft:lava', 1000)]).withCatalyst('compressium:andesite_2').id("create_mechanical_extruder:extruding/andesite")
	event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:cobblestone'), [Fluid.of("minecraft:water", 1000), Fluid.of('minecraft:lava', 1000)]).id("create_mechanical_extruder:extruding/cobblestone")
	event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:stone'), [Fluid.of("minecraft:water", 1000), Fluid.of('minecraft:lava', 1000)]).withCatalyst('minecraft:magma_block').id("create_mechanical_extruder:extruding/stone")

	//Sifting
	event.custom({type: "createsifter:sifting", ingredients: [{item: "createsifter:andesite_mesh"}, {item: "minecraft:sand"}], results: [{item: "thermal:raw_nickel", chance: 0.75}], processingTime: 100}).id("createsifter:sifting/sand_andesite_mesh")
	event.custom({type: "createsifter:sifting", ingredients: [{item: "createsifter:andesite_mesh"}, {item: "minecraft:sand"}], results: [{item: "thermal:raw_tin", chance: 0.75}], processingTime: 100, waterlogged: true}).id("createsifter:sifting/sand_andesite_mesh_waterlogged")

	//Sandpaper Polishing
	event.recipes.createSandpaperPolishing("ae2:certus_quartz_crystal", "ultimation:blue_quartz").id("create:sandpaper_polishing/blue_quartz")

	//Item Application
	//event.custom({type: "create:item_application", ingredients: [{}, {}], results: [{}]}).id()
	event.custom({"type": "create:item_application", "ingredients": [{"tag": "forge:stripped_logs"}, {"item": "create:shadow_steel"}], "results": [{"item": "create:shadow_steel_casing"}]}).id("create:item_application/shadow_casing_from_log")
	event.custom({"type": "create:item_application", "ingredients": [{"tag": "forge:stripped_wood"}, {"item": "create:shadow_steel"}], "results": [{"item": "create:shadow_steel_casing"}]}).id("create:item_application/shadow_casing_from_wood")
	event.custom({"type": "create:item_application", "ingredients": [{"tag": "forge:stripped_logs"}, {"item": "create:refined_radiance"}], "results": [{"item": "create:refined_radiance_casing"}]}).id("create:item_application/refined_casing_from_log")
	event.custom({"type": "create:item_application", "ingredients": [{"tag": "forge:stripped_wood"}, {"item": "create:refined_radiance"}], "results": [{"item": "create:refined_radiance_casing"}]}).id("create:item_application/refined_casing_from_wood")


	//Tesla Coil

	//Rolling Mill

})