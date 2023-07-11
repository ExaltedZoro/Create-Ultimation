onEvent("recipes", event => {
    //Crucible
	let metalCrucible = (input) => {
		event.recipes.thermal.crucible(Fluid.of("tconstruct:molten_"+input, 810), "#forge:storage_blocks/"+input).energy(40500).id("ultimation:crucible/block/"+input)
		event.recipes.thermal.crucible(Fluid.of("tconstruct:molten_"+input, 90), "#forge:ingots/"+input).energy(4500).id("ultimation:crucible/ingot/"+input)
		event.recipes.thermal.crucible(Fluid.of("tconstruct:molten_"+input, 10), "#forge:nuggets/"+input).energy(500).id("ultimation:crucible/nugget/"+input)
	}
	metalCrucible("iron")
	metalCrucible("gold")
	metalCrucible("copper")
	metalCrucible("zinc")
	metalCrucible("nickel")
	metalCrucible("osmium")
    metalCrucible("uranium")
    metalCrucible("tin")
    metalCrucible("lead")
    metalCrucible("silver")
    metalCrucible("cobalt")
    metalCrucible("signalum")
    metalCrucible("lumium")
    metalCrucible("enderium")


	event.recipes.thermal.crucible(Fluid.of("ultimation:molten_nether_star", 80), "minecraft:nether_star").energy(500000).id("ultimation:molten_nether_star")
	event.recipes.thermal.crucible(Fluid.of("ultimation:liquid_prediction", 2000), "create:simulated_mechanism").energy(20000).id("ultimation:liquid_prediction")

	//Chiller
	event.recipes.thermal.chiller("hostilenetworks:empty_prediction", [Fluid.of("ultimation:liquid_prediction", 125), "thermal:chiller_ball_cast"]).id("ultimation:empty_prediction")
    event.recipes.thermal.chiller("thermal:signalum_ingot", [Fluid.of("tconstruct:molten_signalum", 90), "thermal:chiller_ingot_cast"]).id("thermal:machines/chiller/signalum_ingot").energy(10000)
    event.recipes.thermal.chiller("thermal:lumium_ingot", [Fluid.of("tconstruct:molten_lumium", 90), "thermal:chiller_ingot_cast"]).id("thermal:machines/chiller/lumium_ingot").energy(10000)
    event.recipes.thermal.chiller("thermal:enderium_ingot", [Fluid.of("tconstruct:molten_enderium", 90), "thermal:chiller_ingot_cast"]).id("thermal:machines/chiller/enderium_ingot").energy(10000)

	//Bottler
	event.recipes.thermal.bottler("create:blaze_cake", [Fluid.of("thermal:refined_fuel", 125), "create:blaze_cake_base"]).id("thermal:compat/create/bottler_create_blaze_cake")

    //Fractionating Still
    event.recipes.thermal.refinery("thermal:rubber", Fluid.of("thermal:latex", 250)).id("thermal:machines/refinery/latex")
    event.recipes.thermal.refinery(Fluid.of("ultimation:pure_silicon", 125), Fluid.of("ultimation:fine_sand", 250)).id("ultimation:fine_charged_silicon")

    //Pulverizer
    event.recipes.thermal.pulverizer(Item.of("minecraft:raw_copper").withChance(1.6), "#create:stone_types/veridium").id("thermal:compat/create/pulverizer_create_veridium_recycle")
    event.recipes.thermal.pulverizer(Item.of("minecraft:raw_copper").withChance(1.6), "create:veridium").id("thermal:compat/create/pulverizer_create_veridium")
    event.recipes.thermal.pulverizer(Item.of("minecraft:raw_iron").withChance(1.6), "#create:stone_types/crimsite").id("thermal:compat/create/pulverizer_create_crimsite_recycle")
    event.recipes.thermal.pulverizer(Item.of("minecraft:raw_iron").withChance(1.6), "create:crimsite").id("thermal:compat/create/pulverizer_create_crimsite")
    event.recipes.thermal.pulverizer(Item.of("minecraft:raw_gold").withChance(1.6), "#create:stone_types/ochrum").id("thermal:compat/create/pulverizer_create_ochrum_recycle")
    event.recipes.thermal.pulverizer(Item.of("minecraft:raw_gold").withChance(1.6), "create:ochrum").id("thermal:compat/create/pulverizer_create_ochrum")
    event.recipes.thermal.pulverizer(Item.of("create:raw_zinc").withChance(1.6), "#create:stone_types/asurine").id("thermal:compat/create/pulverizer_create_asurine_recycle")
    event.recipes.thermal.pulverizer(Item.of("create:raw_zinc").withChance(1.6), "create:asurine").id("thermal:compat/create/pulverizer_create_asurine")
    event.recipes.thermal.pulverizer("mekanism:dust_coal", "minecraft:coal").energy(2000).id("thermal:machines/pulverizer/pulverizer_coal_dust")
    event.recipes.thermal.pulverizer("mekanism:dust_charcoal", "minecraft:charcoal").energy(2000).id("thermal:machines/pulverizer/pulverizer_charcoal_dust")

    event.recipes.thermal.pulverizer("create:zinc_dust", "create:zinc_ingot").energy(2000).id("thermal:machines/pulverizer/pulverizer_zinc_ingot_to_dust")
    event.recipes.thermal.pulverizer("create:zinc_dust", "createaddition:zinc_sheet").energy(2000).id("thermal:machines/pulverizer/pulverizer_zinc_plate_to_dust")

    //Induction Smelter
    event.recipes.thermal.smelter(["2x ae2:fluix_crystal", "2x minecraft:redstone"], ["ae2:certus_quartz_crystal", "create:polished_rose_quartz", "ultimation:redstone_crystal"]).energy(10000).id("thermal:machines/smelter/smelter_fluix_crystal")
    event.recipes.thermal.smelter("minecraft:ender_pearl", ["minecraft:glass", "tconstruct:ender_slime_ball", "create:powdered_obsidian"]).energy(10000).id("thermal:machines/smelter/smelter_ender_pearl")
    event.recipes.thermal.smelter("create:andesite_alloy_block", ["minecraft:iron_ingot", "compressium:andesite_1"]).energy(28800).id("thermal:compat/create/smelter_create_alloy_andesite_alloy_block_iron")
    event.recipes.thermal.smelter("create:andesite_alloy_block", ["create:zinc_ingot", "compressium:andesite_1"]).energy(28800).id("thermal:compat/create/smelter_create_alloy_andesite_alloy_block_zinc")

    //Multiservo Press
    event.recipes.thermal.press(Fluid.of("mekanism:oxygen", 100), "2x minecraft:blue_ice").energy(10000).id("thermal:machines/press/press_liquid_oxygen")

    //Igneous Extruder

    //Stirling Dynamo
})