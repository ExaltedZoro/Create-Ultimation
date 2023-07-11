// priority: 10

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here

	//Shaped Crafting
	event.shaped("create:blaze_burner", 
	["BBB", "LEL", "BBB"], 
	{B: "minecraft:blaze_powder", L: "minecraft:lava_bucket", E: "create:empty_blaze_burner"}).replaceIngredient("minecraft:lava_bucket", "minecraft:bucket").id("ultimation:blaze_burner")

	event.shaped("create:mechanical_press", [" M ", " C ", " P "], {M: "create:primitive_mechanism", C: "create:andesite_casing", P: "minecraft:heavy_weighted_pressure_plate"}).id("create:crafting/kinetics/mechanical_press")
	event.shaped("create:deployer", [" M ", " C ", " H "], {M: "create:primitive_mechanism", C: "create:andesite_casing", H: "create:brass_hand"}).id("create:crafting/kinetics/deployer")
	event.shaped("create:mechanical_saw", [" S ", " M ", " C "], {S: "thermal:saw_blade", C: "create:andesite_casing", M: "create:primitive_mechanism"}).id("create:crafting/kinetics/mechanical_saw")
	event.shaped("create:mechanical_drill", [" D ", " M ", " C "], {D: "thermal:drill_head", C: "create:andesite_casing", M: "create:primitive_mechanism"}).id("create:crafting/kinetics/mechanical_drill")
	event.shaped("3x create:mechanical_crafter", [" E ", "MCM", " T "], {E: "create:electron_tube", M: "create:precision_mechanism", C: "create:brass_casing", T: "minecraft:crafting_table"}).id("create:crafting/kinetics/mechanical_crafter")
	event.shaped("2x create:mechanical_harvester", ["MSM", "MSM", " C "], {S: "create:primitive_mechanism", M: "create:iron_sheet", C: "create:andesite_casing"}).id("create:crafting/kinetics/mechanical_harvester")
	event.shaped("create_mechanical_extruder:mechanical_extruder", [" S ", "GCG", " M "], {S: "create:shaft", G: "minecraft:glass", C: "create:andesite_casing", M: "create:redstone_mechanism"}).id("create_mechanical_extruder:mechanical_extruder")

	event.shaped("create:fluid_tank", [" C ", "MBM", " C "], {C: "create:copper_sheet", M: "create:watertight_mechanism", B: "minecraft:barrel"}).id("create:crafting/kinetics/fluid_tank")
	event.shaped("create:spout", [" C ", " M ", " K "], {C: "create:copper_sheet", M: "create:watertight_mechanism", K: "minecraft:dried_kelp"}).id("create:crafting/kinetics/spout")

	event.shaped("2x create:andesite_funnel", [" M ", " A ", " K "], {M: "create:primitive_mechanism", A: "create:andesite_alloy", K: "minecraft:dried_kelp"}).id("create:crafting/logistics/andesite_funnel")
	event.shaped("2x create:andesite_tunnel", ["M  ", "AA ", "KK "], {M: "create:primitive_mechanism", A: "create:andesite_alloy", K: "minecraft:dried_kelp"}).id("create:crafting/logistics/andesite_tunnel")

	event.shaped("thermal:drill_head", [" S ", "SCS", "III"], {S: "create:iron_sheet", C: "minecraft:copper_ingot", I: "minecraft:iron_ingot"}).id("thermal:drill_head")

	event.shaped("thermal:device_rock_gen", ["ICI", "GFG", "IMI"], {I: "thermal:invar_ingot", C: "thermal:constantan_gear", G: "minecraft:glass", F: "thermal:machine_frame", M: "create:redstone_mechanism"}).id("thermal:device_rock_gen")
	event.shaped("thermal:device_nullifier", ["ICI", "GFG", "IMI"], {I: "thermal:tin_ingot", C: "minecraft:redstone", G: "minecraft:glass", F: "minecraft:lava_bucket", M: "create:redstone_mechanism"}).id("thermal:device_nullifier")
	event.shaped("thermal:device_fisher", ["ICI", "GFG", "IMI"], {I: "#minecraft:planks", C: "thermal:bronze_gear", G: "minecraft:glass", F: "minecraft:fishing_rod", M: "create:redstone_mechanism"}).id("thermal:device_fisher")
	event.shaped("thermal:device_tree_extractor", ["ICI", "GFG", "IMI"], {I: "#minecraft:planks", C: "thermal:iron_gear", G: "minecraft:glass", F: "minecraft:bucket", M: "create:redstone_mechanism"}).id("thermal:device_tree_extractor")
	event.shaped("thermal:device_composter", ["ICI", "GFG", "IMI"], {I: "#minecraft:planks", C: "thermal:iron_gear", G: "minecraft:glass", F: "minecraft:composter", M: "create:redstone_mechanism"}).id("thermal:device_composter")
	event.shaped("thermal:device_water_gen", ["ICI", "GFG", "IMI"], {I: "thermal:bronze_ingot", C: "minecraft:iron_ingot", G: "minecraft:glass", F: "minecraft:bucket", M: "create:redstone_mechanism"}).id("thermal:device_water_gen")
	event.shaped("thermal:device_collector", ["ICI", "GFG", "IMI"], {I: "thermal:tin_ingot", C: "minecraft:ender_pearl", G: "minecraft:glass", F: "minecraft:hopper", M: "create:redstone_mechanism"}).id("thermal:device_collector")
	event.shaped("thermal:device_potion_diffuser", ["ICI", "GFG", "IMI"], {I: "thermal:silver_ingot", C: "thermal:constantan_gear", G: "minecraft:glass", F: "minecraft:glass_bottle", M: "create:redstone_mechanism"}).id("thermal:device_potion_diffuser")

	event.shaped("sophisticatedstorage:basic_to_iron_tier_upgrade", ["III", "MTM", "III"], {I: "minecraft:iron_ingot", M: "create:compact_mechanism", T: "minecraft:redstone_torch"}).id("sophisticatedstorage:basic_to_iron_tier_upgrade")
	event.shaped("sophisticatedstorage:basic_to_gold_tier_upgrade", ["III", "MTM", "III"], {I: "minecraft:gold_ingot", M: "create:compact_mechanism", T: "sophisticatedstorage:basic_to_iron_tier_upgrade"}).id("sophisticatedstorage:basic_to_gold_tier_upgrade")
	event.shaped("sophisticatedstorage:basic_to_diamond_tier_upgrade", ["III", "MTM", "III"], {I: "minecraft:diamond", M: "create:compact_mechanism", T: "sophisticatedstorage:basic_to_gold_tier_upgrade"}).id("sophisticatedstorage:basic_to_diamond_tier_upgrade")
	event.shaped("sophisticatedstorage:basic_to_netherite_tier_upgrade", ["III", "MTM", "III"], {I: "minecraft:netherite_ingot", M: "create:compact_mechanism", T: "sophisticatedstorage:basic_to_diamond_tier_upgrade"}).id("sophisticatedstorage:basic_to_netherite_tier_upgrade")
	event.shaped("sophisticatedstorage:iron_to_gold_tier_upgrade", ["III", "MTM", "III"], {I: "minecraft:gold_ingot", M: "create:compact_mechanism", T: "minecraft:redstone_torch"}).id("sophisticatedstorage:iron_to_gold_tier_upgrade")
	event.shaped("sophisticatedstorage:gold_to_diamond_tier_upgrade", ["III", "MTM", "III"], {I: "minecraft:diamond", M: "create:compact_mechanism", T: "minecraft:redstone_torch"}).id("sophisticatedstorage:gold_to_diamond_tier_upgrade")
	event.shaped("sophisticatedstorage:diamond_to_netherite_tier_upgrade", ["III", "MTM", "III"], {I: "minecraft:netherite_ingot", M: "create:compact_mechanism", T: "minecraft:redstone_torch"}).id("sophisticatedstorage:diamond_to_netherite_tier_upgrade")
	event.shaped("sophisticatedstorage:iron_to_diamond_tier_upgrade", ["III", "MTM", "III"], {I: "minecraft:diamond", M: "create:compact_mechanism", T: "sophisticatedstorage:iron_to_gold_tier_upgrade"}).id("sophisticatedstorage:iron_to_diamond_tier_upgrade")
	event.shaped("sophisticatedstorage:iron_to_netherite_tier_upgrade", ["III", "MTM", "III"], {I: "minecraft:netherite_ingot", M: "create:compact_mechanism", T: "sophisticatedstorage:iron_to_diamond_tier_upgrade"}).id("sophisticatedstorage:iron_to_netherite_tier_upgrade")
	event.shaped("sophisticatedstorage:gold_to_netherite_tier_upgrade", ["III", "MTM", "III"], {I: "minecraft:netherite_ingot", M: "create:compact_mechanism", T: "sophisticatedstorage:gold_to_diamond_tier_upgrade"}).id("sophisticatedstorage:gold_to_netherite_tier_upgrade")

	event.shapeless(
		Item.of("sophisticatedstorage:chest", {woodType: "oak"}),
		["minecraft:chest", "minecraft:redstone_torch"]
	).id("sophisticatedstorage:oak_chest_from_default")
	
	event.shapeless(
		Item.of("sophisticatedstorage:barrel", {woodType: "spruce"}),
		["minecraft:barrel", "minecraft:redstone_torch"]
	).id("sophisticatedstorage:oak_barrel_from_default")

	woods.forEach(wood => {
		event.shaped(
			Item.of("sophisticatedstorage:chest", {woodType: wood}),
			["PPP", "PTP", "PPP"],
			{P: "minecraft:"+wood+"_planks", T: "minecraft:redstone_torch"}
		).id("sophisticatedstorage:"+wood+"_chest")

		event.shaped(
			Item.of("sophisticatedstorage:barrel", {woodType: wood}),
			["PSP", "PTP", "PSP"],
			{P: "minecraft:"+wood+"_planks", T: "minecraft:redstone_torch", S: "minecraft:"+wood+"_slab"}
		).id("sophisticatedstorage:"+wood+"_barrel")

		storagetype.forEach(type => {
			event.shaped(
				Item.of("sophisticatedstorage:iron_"+type, {woodType: wood}),
				["III", "CBC", "III"],
				{I: "minecraft:iron_ingot", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:"+type, {woodType: wood})}
			).id("sophisticatedstorage:"+wood+"_iron_"+type)
			event.shaped(
				Item.of("sophisticatedstorage:gold_"+type, {woodType: wood}),
				["III", "CBC", "III"],
				{I: "minecraft:gold_ingot", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:iron_"+type, {woodType: wood})}
			).id("sophisticatedstorage:"+wood+"_gold_"+type)
			event.shaped(
				Item.of("sophisticatedstorage:diamond_"+type, {woodType: wood}),
				["III", "CBC", "III"],
				{I: "minecraft:diamond", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:gold_"+type, {woodType: wood})}
			).id("sophisticatedstorage:"+wood+"_diamond_"+type)
			event.shaped(
				Item.of("sophisticatedstorage:netherite_"+type, {woodType: wood}),
				["III", "CBC", "III"],
				{I: "minecraft:netherite_ingot", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:diamond_"+type, {woodType: wood})}
			).id("sophisticatedstorage:"+wood+"_netherite_"+type)
		})
	})

	event.shaped(
		Item.of("sophisticatedstorage:iron_shulker_box"),
		["III", "CBC", "III"],
		{I: "minecraft:iron_ingot", C: "create:compact_mechanism", B: "sophisticatedstorage:shulker_box"}
	).id("sophisticatedstorage:iron_shulker_box")
	event.shaped(
		Item.of("sophisticatedstorage:gold_shulker_box"),
		["III", "CBC", "III"],
		{I: "minecraft:gold_ingot", C: "create:compact_mechanism", B: "sophisticatedstorage:iron_shulker_box"}
	).id("sophisticatedstorage:gold_shulker_box")
	event.shaped(
		Item.of("sophisticatedstorage:diamond_shulker_box"),
		["III", "CBC", "III"],
		{I: "minecraft:diamond", C: "create:compact_mechanism", B: "sophisticatedstorage:gold_shulker_box"}
	).id("sophisticatedstorage:diamond_shulker_box")
	event.shaped(
		Item.of("sophisticatedstorage:netherite_shulker_box"),
		["III", "CBC", "III"],
		{I: "minecraft:netherite_ingot", C: "create:compact_mechanism", B: "sophisticatedstorage:diamond_shulker_box"}
	).id("sophisticatedstorage:netherite_shulker_box")

	/*/dyeID.forEach(id => {
		event.shaped(
			Item.of("sophisticatedstorage:iron_shulker_box", {mainColor: id}),
			["III", "CBC", "III"],
			{I: "minecraft:iron_ingot", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:shulker_box", {mainColor: id})}
		).id("sophisticatedstorage:iron_shulker_box_maincolor_"+id)
		event.shaped(
			Item.of("sophisticatedstorage:gold_shulker_box", {mainColor: id}),
			["III", "CBC", "III"],
			{I: "minecraft:gold_ingot", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:iron_shulker_box", {mainColor: id})}
		).id("sophisticatedstorage:gold_shulker_box_maincolor_"+id)
		event.shaped(
			Item.of("sophisticatedstorage:diamond_shulker_box", {mainColor: id}),
			["III", "CBC", "III"],
			{I: "minecraft:diamond", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:gold_shulker_box", {mainColor: id})}
		).id("sophisticatedstorage:diamond_shulker_box_maincolor_"+id)
		event.shaped(
			Item.of("sophisticatedstorage:netherite_shulker_box", {mainColor: id}),
			["III", "CBC", "III"],
			{I: "minecraft:netherite_ingot", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:diamond_shulker_box", {mainColor: id})}
		).id("sophisticatedstorage:netherite_shulker_box_maincolor_"+id)
		event.shaped(
			Item.of("sophisticatedstorage:iron_shulker_box", {accentColor: id}),
			["III", "CBC", "III"],
			{I: "minecraft:iron_ingot", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:shulker_box", {accentColor: id})}
		).id("sophisticatedstorage:iron_shulker_box_accentcolor_"+id)
		event.shaped(
			Item.of("sophisticatedstorage:gold_shulker_box", {accentColor: id}),
			["III", "CBC", "III"],
			{I: "minecraft:gold_ingot", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:iron_shulker_box", {accentColor: id})}
		).id("sophisticatedstorage:gold_shulker_box_accentcolor_"+id)
		event.shaped(
			Item.of("sophisticatedstorage:diamond_shulker_box", {accentColor: id}),
			["III", "CBC", "III"],
			{I: "minecraft:diamond", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:gold_shulker_box", {accentColor: id})}
		).id("sophisticatedstorage:diamond_shulker_box_accentcolor_"+id)
		event.shaped(
			Item.of("sophisticatedstorage:netherite_shulker_box", {accentColor: id}),
			["III", "CBC", "III"],
			{I: "minecraft:netherite_ingot", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:diamond_shulker_box", {accentColor: id})}
		).id("sophisticatedstorage:netherite_shulker_box_accentcolor_"+id)
		dyeID.forEach(id2 => {
			event.shaped(
				Item.of("sophisticatedstorage:iron_shulker_box", {mainColor: id, accentColor: id2}),
				["III", "CBC", "III"],
				{I: "minecraft:iron_ingot", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:shulker_box", {mainColor: id, accentColor: id2})}
			).id("sophisticatedstorage:iron_shulker_box_maincolor_"+id+"_accentcolor_"+id2)
			event.shaped(
				Item.of("sophisticatedstorage:gold_shulker_box", {mainColor: id, accentColor: id2}),
				["III", "CBC", "III"],
				{I: "minecraft:gold_ingot", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:iron_shulker_box", {mainColor: id, accentColor: id2})}
			).id("sophisticatedstorage:gold_shulker_box_maincolor_"+id+"_accentcolor_"+id2)
			event.shaped(
				Item.of("sophisticatedstorage:diamond_shulker_box", {mainColor: id, accentColor: id2}),
				["III", "CBC", "III"],
				{I: "minecraft:diamond", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:gold_shulker_box", {mainColor: id, accentColor: id2})}
			).id("sophisticatedstorage:diamond_shulker_box_maincolor_"+id+"_accentcolor_"+id2)
			event.shaped(
				Item.of("sophisticatedstorage:netherite_shulker_box", {mainColor: id, accentColor: id2}),
				["III", "CBC", "III"],
				{I: "minecraft:netherite_ingot", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:diamond_shulker_box", {mainColor: id, accentColor: id2})}
			).id("sophisticatedstorage:netherite_shulker_box_maincolor_"+id+"_accentcolor_"+id2)
		})
	})

	dyeID.forEach(id => {
		woods.forEach(wood =>{
			storagetype.forEach(type => {
				event.shaped(
					Item.of("sophisticatedstorage:iron_"+type, {woodType: wood, mainColor: id}),
					["III", "CBC", "III"],
					{I: "minecraft:iron_ingot", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:"+type, {woodType: wood, mainColor: id})}
				).id("sophisticatedstorage:"+wood+"_iron_"+type+"_maincolor_"+id)
				event.shaped(
					Item.of("sophisticatedstorage:gold_"+type, {woodType: wood, mainColor: id}),
					["III", "CBC", "III"],
					{I: "minecraft:gold_ingot", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:iron_"+type, {woodType: wood, mainColor: id})}
				).id("sophisticatedstorage:"+wood+"_gold_"+type+"_maincolor_"+id)
				event.shaped(
					Item.of("sophisticatedstorage:diamond_"+type, {woodType: wood, mainColor: id}),
					["III", "CBC", "III"],
					{I: "minecraft:diamond", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:gold_"+type, {woodType: wood, mainColor: id})}
				).id("sophisticatedstorage:"+wood+"_diamond_"+type+"_maincolor_"+id)
				event.shaped(
					Item.of("sophisticatedstorage:netherite_"+type, {woodType: wood, mainColor: id}),
					["III", "CBC", "III"],
					{I: "minecraft:netherite_ingot", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:diamond_"+type, {woodType: wood, mainColor: id})}
				).id("sophisticatedstorage:"+wood+"_netherite_"+type+"_maincolor_"+id)

				event.shaped(
					Item.of("sophisticatedstorage:iron_"+type, {woodType: wood, accentColor: id}),
					["III", "CBC", "III"],
					{I: "minecraft:iron_ingot", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:"+type, {woodType: wood, accentColor: id})}
				).id("sophisticatedstorage:"+wood+"_iron_"+type+"_accentcolor_"+id)
				event.shaped(
					Item.of("sophisticatedstorage:gold_"+type, {woodType: wood, accentColor: id}),
					["III", "CBC", "III"],
					{I: "minecraft:gold_ingot", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:iron_"+type, {woodType: wood, accentColor: id})}
				).id("sophisticatedstorage:"+wood+"_gold_"+type+"_accentcolor_"+id)
				event.shaped(
					Item.of("sophisticatedstorage:diamond_"+type, {woodType: wood, accentColor: id}),
					["III", "CBC", "III"],
					{I: "minecraft:diamond", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:gold_"+type, {woodType: wood, accentColor: id})}
				).id("sophisticatedstorage:"+wood+"_diamond_"+type+"_accentcolor_"+id)
				event.shaped(
					Item.of("sophisticatedstorage:netherite_"+type, {woodType: wood, accentColor: id}),
					["III", "CBC", "III"],
					{I: "minecraft:netherite_ingot", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:diamond_"+type, {woodType: wood, accentColor: id})}
				).id("sophisticatedstorage:"+wood+"_netherite_"+type+"_accentcolor_"+id)

				dyeID.forEach(id2 => {
					event.shaped(
						Item.of("sophisticatedstorage:iron_"+type, {mainColor: id, accentColor: id2}),
						["III", "CBC", "III"],
						{I: "minecraft:iron_ingot", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:"+type, {mainColor: id, accentColor: id2})}
					).id("sophisticatedstorage:iron_"+type+"_maincolor_"+id+"_accentcolor_"+id2)
					event.shaped(
						Item.of("sophisticatedstorage:gold_"+type, {mainColor: id, accentColor: id2}),
						["III", "CBC", "III"],
						{I: "minecraft:gold_ingot", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:iron_"+type, {mainColor: id, accentColor: id2})}
					).id("sophisticatedstorage:gold_"+type+"_maincolor_"+id+"_accentcolor_"+id2)
					event.shaped(
						Item.of("sophisticatedstorage:diamond_"+type, {mainColor: id, accentColor: id2}),
						["III", "CBC", "III"],
						{I: "minecraft:diamond", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:gold_"+type, {mainColor: id, accentColor: id2})}
					).id("sophisticatedstorage:diamond_"+type+"_maincolor_"+id+"_accentcolor_"+id2)
					event.shaped(
						Item.of("sophisticatedstorage:netherite_"+type, {mainColor: id, accentColor: id2}),
						["III", "CBC", "III"],
						{I: "minecraft:netherite_ingot", C: "create:compact_mechanism", B: Item.of("sophisticatedstorage:diamond_"+type, {mainColor: id, accentColor: id2})}
					).id("sophisticatedstorage:netherite_"+type+"_maincolor_"+id+"_accentcolor_"+id2)
				})
			})
		})
	})/*/

	//Shapeless Crafting
	event.shapeless("tconstruct:sky_slime_ball", ["create:dough", "minecraft:cyan_dye"]).id("ultimation:sky_slime_ball")
	event.shapeless("tconstruct:ender_slime_ball", ["create:dough", "minecraft:magenta_dye"]).id("ultimation:ender_slime_ball")
	event.shapeless("tconstruct:ichor_slime_ball", ["create:dough", "minecraft:orange_dye"]).id("ultimation:ichor_slime_ball")

	//Smelting

	//Smithing
	event.smithing("thermal:upgrade_augment_1", "create:precision_mechanism", "#forge:ingots/invar").id("minecraft:smithing/hardened_components")
	event.smithing("thermal:upgrade_augment_2", "create:digital_mechanism", "#forge:ingots/electrum").id("minecraft:smithing/reinforced_components")
	event.smithing("thermal:upgrade_augment_3", "create:simulated_mechanism", "#forge:ingots/enderium").id("minecraft:smithing/resonant_components")

	//Tinkers
	event.recipes.tconstruct.casting_table("ultimation:redstone_crystal", "thermal:redstone", 200).cast("tconstruct:gem_cast").id("tconstruct:casting/redstone_crystal")
	event.recipes.tconstruct.casting_table("thermal:slag", "ultimation:liquid_slag", 90).noCast().id("tconstruct:casting/slag")
	event.recipes.tconstruct.casting_basin("thermal:slag_block", "ultimation:liquid_slag", 360).noCast().id("tconstruct:casting/slag_block")
	event.recipes.tconstruct.casting_basin("create:andesite_alloy_block", "tconstruct:molten_iron", 90).cast("compressium:andesite_1").id("tconstruct:casting/andesite_alloy_block_iron")
	event.recipes.tconstruct.casting_basin("create:andesite_alloy_block", "tconstruct:molten_zinc", 90).cast("compressium:andesite_1").id("tconstruct:casting/andesite_alloy_block_zinc")

	event.custom({type: "tconstruct:melting", ingredient: {item: "minecraft:redstone"}, result:{fluid: "thermal:redstone", amount: 100}, temperature: 500, time: 8}).id("tconstruct:smeltery/melting/redstone")
	event.custom({type: "tconstruct:melting", ingredient: {item: "minecraft:redstone_block"}, result:{fluid: "thermal:redstone", amount: 900}, temperature: 500, time: 72}).id("tconstruct:smeltery/melting/redstone_block")

	//Input Replacement
	event.replaceInput({id: "hostilenetworks:living_matter/loot_fabricator"}, "minecraft:comparator", "create:simulated_mechanism")
	event.replaceInput({output: "hostilenetworks:blank_data_model"}, "minecraft:repeater", "create:simulated_mechanism")
	event.replaceInput({id: "thermal:machine_frame"}, "#forge:ingots/iron", "create:thermal_mechanism")
	event.replaceInput({id: "mekanism:steel_casing"}, "#forge:ingots/steel", "create:mek_mechanism")
	event.replaceInput({mod: "functionalstorage", output: ["functionalstorage:copper_upgrade", "functionalstorage:gold_upgrade", "functionalstorage:diamond_upgrade"]}, "#forge:chests/wooden", "create:compact_mechanism")
	event.replaceInput({mod: "functionalstorage"}, "minecraft:bucket", "create:watertight_mechanism")
	event.replaceInput({output: "mekanism:ultimate_mechanical_pipe"}, "mekanism:alloy_atomic", "mekanism:pellet_antimatter")
	event.replaceInput({output: "mekanism:ultimate_mechanical_pipe"}, "mekanism:elite_mechanical_pipe", "create:fluid_pipe")
	event.replaceInput({output: "mekanism:ultimate_logistical_transporter"}, "mekanism:alloy_atomic", "mekanism:pellet_antimatter")
	event.replaceInput({output: "mekanism:ultimate_logistical_transporter"}, "mekanism:elite_logistical_transporter", "create:belt_connector")
	event.replaceInput({output: "create:mechanical_mixer"}, "create:cogwheel", "create:primitive_mechanism")
	event.replaceInput({output: "create:encased_fan"}, "create:shaft", "create:primitive_mechanism")
	event.replaceInput({output: "create:hose_pulley"}, "create:copper_sheet", "create:watertight_mechanism")
	event.replaceInput({output: "create:steam_engine"}, "create:andesite_alloy", "create:watertight_mechanism")
	event.replaceInput({id: "storagenetwork:master"}, "minecraft:diamond", "create:precision_mechanism")
	event.replaceInput({id: "storagenetwork:master"}, "minecraft:quartz", "create:compact_mechanism")
	event.replaceInput({output: "ae2:charged_certus_quartz_crystal"}, "ae2:certus_quartz_crystal", "ultimation:blue_quartz")
	event.replaceInput({output: "ae2:controller"}, "ae2:smooth_sky_stone_block", "create:digital_mechanism")
	event.replaceInput({}, "ae2:certus_quartz_crystal", "ultimation:blue_quartz")
	event.replaceInput({output: "thermal:saw_blade"}, "minecraft:iron_ingot", "create:iron_sheet")
	event.replaceInput({output: "mekanism:metallurgic_infuser"}, "mekanism:ingot_osmium", "mekanism:steel_casing")
	event.replaceInput({id: "thermal:machine_crucible"}, "minecraft:glass", "tconstruct:smeltery_controller")
	event.replaceInput({output: "thermal:machine_chiller"}, "minecraft:packed_ice", "minecraft:snow_block")

	event.replaceInput({output: ["create:brass_funnel", "create:brass_tunnel"]}, "create:electron_tube", "create:precision_mechanism")
	event.replaceInput({output: "createaddition:rolling_mill"}, "create:andesite_alloy", "create:primitive_mechanism")

	event.replaceInput({type: "thermal:smelter"}, "thermal:iron_dust", "minecraft:iron_ingot")
	event.replaceInput({type: "thermal:smelter"}, "thermal:copper_dust", "minecraft:copper_ingot")
	event.replaceInput({type: "thermal:smelter"}, "thermal:gold_dust", "minecraft:gold_ingot")
	event.replaceInput({type: "thermal:smelter"}, "thermal:tin_dust", "thermal:tin_ingot")
	event.replaceInput({type: "thermal:smelter"}, "thermal:silver_dust", "thermal:silver_ingot")
	
	//Output Replacement
	event.replaceOutput({}, "ae2:certus_quartz_crystal", "ultimation:blue_quartz")
	event.replaceOutput({}, "create:mechanical_harvester", "2x create:mechanical_harvester")

	//Recipe removals
	event.remove({mod: "createsifter", input: "minecraft:gravel"})
	event.remove({mod: "createsifter", input: "minecraft:sand"})
	event.remove({mod: "mekanism", output: "mekanism:alloy_infused"})
	event.remove({output: "mekanism:basic_mechanical_pipe"})
	event.remove({id: "thermal:augments/upgrade_augment_1"})
	event.remove({id: "thermal:augments/upgrade_augment_2"})
	event.remove({id: "thermal:augments/upgrade_augment_3"})
	event.remove({id: "thermal:devices/tree_extractor/tree_extractor_jungle"})
	event.remove({id: "hostilenetworks:living_matter/matrix"})
	event.remove({id: "thermal:machines/refinery/refinery_crude_oil"})
	event.remove({id: "thermal:rf_coil"})
	event.remove({id: "thermal:machines/refinery/refinery_light_oil"})
	event.remove({id: "thermal:machines/refinery/refinery_heavy_oil"})
	event.remove({output: "thermal:rubber"})
	event.remove({mod: "thermal", output: "thermal:latex"})
	event.remove({id: "create:crafting/materials/electron_tube"})
	event.remove({mod: "tconstruct", output: ["thermal:enderium_ingot", "thermal:enderium_coin", "thermal:enderium_gear", "thermal:enderium_block", "thermal:enderium_nugget", "thermal:enderium_plate"]})
	event.remove({mod: "tconstruct", output: ["thermal:signalum_ingot", "thermal:signalum_nugget", "thermal:signalum_block", "thermal:signalum_gear", "thermal:signalum_plate", "thermal:signalum_coin"]})
	event.remove({mod: "tconstruct", output: ["thermal:lumium_ingot", "thermal:lumium_nugget", "thermal:lumium_block", "thermal:lumium_gear", "thermal:lumium_plate", "thermal:lumium_coin"]})
	event.remove({input: "#forge:ingots/lead", output: "thermal:enderium_ingot"})
	event.remove({input: "#forge:ingots/silver", output: "thermal:signalum_ingot"})
	event.remove({input: "#forge:ingots/tin", output: "thermal:lumium_ingot"})
	event.remove({input: "#forge:dusts/lead", output: "thermal:enderium_dust"})
	event.remove({input: "#forge:dusts/silver", output: "thermal:signalum_dust"})
	event.remove({input: "#forge:dusts/tin", output: "thermal:lumium_dust"})
	event.remove({output: "ae2:silicon", input: "ae2:certus_quartz_dust"})
	event.remove({id: "mekanism:dye_base"})
	event.remove({id: "tconstruct:smeltery/alloys/molten_brass"})
	event.remove({id: "tconstruct:smeltery/alloys/molten_invar"})
	event.remove({id: "tconstruct:smeltery/alloys/molten_enderium"})
	event.remove({id: "tconstruct:smeltery/alloys/molten_lumium"})
	event.remove({id: "tconstruct:smeltery/alloys/molten_signalum"})
	event.remove({input: "minecraft:fire_charge", type: "minecraft:crafting_shapeless"})
	event.remove({type: "minecraft:crafting_shapeless", output: ["thermal:bronze_dust", "thermal:electrum_dust", "thermal:invar_dust", "thermal:constantan_dust"]})
	event.remove({type: "minecraft:smelting", output: ["minecraft:iron_ingot", "minecraft:copper_ingot", "minecraft:gold_ingot", "create:zinc_ingot", "thermal:silver_ingot", "thermal:tin_ingot", "thermal:lead_ingot", "thermal:nickel_ingot", "mekanism:ingot_uranium", "mekanism:ingot_osmium"]})
	event.remove({type: "minecraft:blasting", output: ["minecraft:iron_ingot", "minecraft:copper_ingot", "minecraft:gold_ingot", "create:zinc_ingot", "thermal:silver_ingot", "thermal:tin_ingot", "thermal:lead_ingot", "thermal:nickel_ingot", "mekanism:ingot_uranium", "mekanism:ingot_osmium"]})
	event.remove({output: ["storagenetwork:request", "storagenetwork:import_kabel", "storagenetwork:import_filter_kabel", "storagenetwork:export_kabel", "storagenetwork:filter_kabel", "storagenetwork:exchange", "storagenetwork:collector", "storagenetwork:speed_upgrade", "storagenetwork:slow_upgrade", "storagenetwork:stack_upgrade", "storagenetwork:stock_upgrade", "storagenetwork:operation_upgrade", "storagenetwork:single_upgrade", "storagenetwork:inventory_remote", "storagenetwork:crafting_remote", "storagenetwork:picker_remote", "storagenetwork:collector_remote", "storagenetwork:builder_remote"]})
	event.remove({type: "ae2:inscriber"})
	event.remove({output: "create:rose_quartz"})
	event.remove({id: "create:compat/ae2/mixing/fluix_crystal"})
	event.remove({output: "ae2:charger"})
	event.remove({output: ["ae2:certus_crystal_seed", "ae2:fluix_crystal_seed"]})
	event.remove({input: ["ae2:certus_crystal_seed", "ae2:fluix_crystal_seed"]})
	event.remove({mod: "thermal", output: "create:chromatic_compound"})

	let removeTool = (namespace, type) => {
		event.remove({output: [namespace+":"+type+"_pickaxe", namespace+":"+type+"_axe", namespace+":"+type+"_sword", namespace+":"+type+"_shovel", namespace+":"+type+"_hoe"]})
	}

	removeTool("minecraft", "wooden")
	removeTool("minecraft", "stone")
	removeTool("minecraft", "iron")
	removeTool("minecraft", "gold")
	removeTool("minecraft", "diamond")
	removeTool("minecraft", "netherite")
	removeTool("ae2", "certus_quartz")
	removeTool("ae2", "fluix")
	removeTool("ae2", "nether_quartz")
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
	event.get("ae2:all_certus_quartz").add("ultimation:blue_quartz")
	event.get("forge:dusts/zinc").add("create:zinc_dust")
	event.get("forge:dusts").add("create:zinc_dust")
	event.get("forge:nuggets/copper").add("minecraft:copper_nugget")
	event.get("forge:nuggets").add("minecraft:copper_nugget")
	event.get("balm:nuggets").add("minecraft:copper_nugget")
})

onEvent("block.tags", event => {

})