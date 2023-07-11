//priority: 0

onEvent("recipes" , event => {
    event.shaped("create:primitive_mechanism", ["SCS", "LHL", "SCS"], {S: "#minecraft:wooden_slabs", C: "create:cogwheel", H: "create:shaft", L: "#minecraft:logs"}).id("create:primitive_crafting_table")

	event.recipes.createSequencedAssembly(
		"create:primitive_mechanism",
		"#minecraft:logs",
		[
			event.recipes.createDeploying("create:incomplete_primitive_mechanism", ["create:incomplete_primitive_mechanism", "create:andesite_alloy"]),
			event.recipes.createDeploying("create:incomplete_primitive_mechanism", ["create:incomplete_primitive_mechanism", "create:andesite_alloy"]),
			event.recipes.createCutting("create:incomplete_primitive_mechanism", "create:incomplete_primitive_mechanism")
		]
	).transitionalItem("create:incomplete_primitive_mechanism").loops(1).id("create:sequenced_assembly/primitive_mechanism")

	event.recipes.createSequencedAssembly(
		"create:primitive_mechanism",
		"create:primitive_base",
		[
			event.recipes.createDeploying("create:incomplete_primitive_mechanism", ["create:primitive_base", "create:andesite_alloy"]),
			event.recipes.createDeploying("create:primitive_mechanism", ["create:incomplete_primitive_mechanism", "create:andesite_alloy"])
		]
	).transitionalItem("create:incomplete_primitive_mechanism").loops(1).id("create:sequenced_assembly/cheap_primitive_mechanism")
	
	event.recipes.createSequencedAssembly(
		"create:precision_mechanism",
		"create:primitive_mechanism",
		[
			event.recipes.createDeploying("create:incomplete_precision_mechanism", ["create:primitive_mechanism", "create:electron_tube"]),
			event.recipes.createDeploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "create:electron_tube"]),
			event.recipes.createFilling("create:precision_mechanism", ["create:incomplete_precision_mechanism", Fluid.of("tconstruct:molten_brass", 90)])
		]
	).transitionalItem("create:incomplete_precision_mechanism").loops(1).id("create:sequenced_assembly/precision_mechanism")

	event.recipes.createSequencedAssembly(
		"create:precision_mechanism",
		"create:precision_base",
		[
			event.recipes.createDeploying("create:incomplete_precision_mechanism", ["create:precision_base", "create:electron_tube"]),
			event.recipes.createDeploying("create:incomplete_precision_mechanism", ["create:incomplete_precision_mechanism", "create:electron_tube"])
		]
	).transitionalItem("create:incomplete_precision_mechanism").loops(1).id("create:sequenced_assembly/cheap_precision_mechanism")

	event.recipes.createSequencedAssembly(
		"create:thermal_mechanism",
		"create:precision_mechanism",
		[event.recipes.createFilling("create:thermal_mechanism", ["create:incomplete_thermal_mechanism", Fluid.of("tconstruct:molten_invar", 90)]),
		event.recipes.createDeploying("create:incomplete_thermal_mechanism", ["create:thermal_base", "thermal:rf_coil"]),
		event.recipes.createDeploying("create:incomplete_thermal_mechanism", ["create:incomplete_thermal_mechanism", "thermal:rf_coil"])]
	).transitionalItem("create:incomplete_thermal_mechanism").loops(1).id("create:sequenced_assembly/thermal_mechanism")

	event.recipes.createSequencedAssembly(
		"create:thermal_mechanism",
		"create:thermal_base",
		[
			event.recipes.createDeploying("create:incomplete_thermal_mechanism", ["create:thermal_base", "thermal:rf_coil"]),
			event.recipes.createDeploying("create:thermal_mechanism", ["create:incomplete_thermal_mechanism", "thermal:rf_coil"])
		]
	).transitionalItem("create:incomplete_thermal_mechanism").loops(1).id("create:sequenced_assembly/cheap_thermal_mechanism")
	
	event.recipes.createSequencedAssembly(
		"create:digital_mechanism",
		"create:thermal_mechanism",
		[
			event.recipes.createDeploying("create:incomplete_digital_mechanism", ["create:thermal_mechanism", "ae2:silicon"]),
			event.recipes.createPressing("create:incomplete_digital_mechanism", "create:incomplete_digital_mechanism"),
			event.recipes.createDeploying("create:incomplete_digital_mechanism", ["create:incomplete_digital_mechanism", "ae2:fluix_crystal"]),
			event.recipes.createDeploying("create:incomplete_digital_mechanism", ["create:incomplete_digital_mechanism", "ae2:fluix_crystal"])
		]
	).transitionalItem("create:incomplete_digital_mechanism").loops(1).id("create:sequenced_assembly/digital_mechanism")

	event.recipes.createSequencedAssembly(
		"create:digital_mechanism",
		"create:digital_base",
		[
			event.recipes.createDeploying("create:incomplete_digital_mechanism", ["create:incomplete_digital_mechanism", "ae2:fluix_crystal"]),
			event.recipes.createDeploying("create:incomplete_digital_mechanism", ["create:incomplete_digital_mechanism", "ae2:fluix_crystal"])
		]
	).transitionalItem("create:incomplete_digital_mechanism").loops(1).id("create:sequenced_assembly/cheap_digital_mechanism")

	event.recipes.createSequencedAssembly(
		"create:mek_mechanism",
		"create:digital_mechanism",
		[
			event.recipes.createFilling("create:incomplete_mek_mechanism", ["create:digital_mechanism", Fluid.of("mekanism:oxygen", 100)]),
			event.recipes.createDeploying("create:incomplete_mek_mechanism", ["create:incomplete_mek_mechanism", "mekanism:alloy_infused"]),
			event.recipes.createDeploying("create:mek_mechanism", ["create:incomplete_mek_mechanism", "mekanism:alloy_infused"])
		]
	).transitionalItem("create:incomplete_mek_mechanism").loops(1).id("create:sequenced_assembly/mek_mechanism")

	event.recipes.createSequencedAssembly(
		"create:mek_mechanism",
		"create:mek_base",
		[
			event.recipes.createDeploying("create:incomplete_mek_mechanism", ["create:mek_base", "mekanism:alloy_infused"]),
			event.recipes.createDeploying("create:mek_mechanism", ["create:incomplete_mek_mechanism", "mekanism:alloy_infused"])
		]
	).transitionalItem("create:incomplete_mek_mechanism").loops(1).id("create:sequenced_assembly/cheap_mek_mechanism")

	event.recipes.createSequencedAssembly(
		"create:simulated_mechanism",
		"create:mek_mechanism",
		[
			event.recipes.createFilling("create:incomplete_simulated_mechanism", ["create:mek_mechanism", Fluid.of("tconstruct:molten_enderium", 90)]),
			event.recipes.createDeploying("create:incomplete_simulated_mechanism", ["create:incomplete_simulated_mechanism", "ae2:quantum_entangled_singularity"]),
			event.recipes.createDeploying("create:simulated_mechanism", ["create:incomplete_simulated_mechanism", "ae2:quantum_entangled_singularity"])
		]
	).transitionalItem("create:incomplete_simulated_mechanism").loops(1).id("create:sequenced_assembly/simulated_mechanism")

	event.recipes.createSequencedAssembly(
		"create:simulated_mechanism",
		"create:simulated_base",
		[event.recipes.createDeploying("create:incomplete_simulated_mechanism", ["create:simulated_base", "mekanism:teleportation_core"]),
		event.recipes.createDeploying("create:simulated_mechanism", ["create:incomplete_simulated_mechanism", "mekanism:teleportation_core"])]
	).transitionalItem("create:incomplete_simulated_mechanism").loops(1).id("create:sequenced_assembly/cheap_simulated_mechanism")

	event.recipes.createSequencedAssembly(
		"create:ultimate_mechanism",
		"create:ultimate_base",
		[event.recipes.createDeploying("create:incomplete_ultimate_mechanism", ["create:ultimate_base", "create:ages_mechanism"]),
		event.recipes.createDeploying("create:incomplete_ultimate_mechanism", ["create:incomplete_ultimate_mechanism", "create:dimensional_mechanism"]),
		event.recipes.createDeploying("create:incomplete_ultimate_mechanism", ["create:incomplete_ultimate_mechanism", "create:utility_mechanism"]),
		event.recipes.createFilling("create:ultimate_mechanism", ["create:incomplete_ultimate_mechanism", Fluid.of("ultimation:molten_nether_star", 10)])]
	).transitionalItem("create:incomplete_ultimate_mechanism").loops(8).id("create:sequenced_assembly/ultimate_mechanism")

	//Utilty Mechanism Recipes
	event.recipes.createCompacting("create:compact_mechanism", ["4x create:primitive_mechanism"]).id("create:compacting/compact_mechanism")
	
	event.recipes.createMixing(["create:watertight_mechanism", Fluid.of("minecraft:water", 250)], ["create:primitive_mechanism", Fluid.of("thermal:latex", 250)]).id("create:mixing/watertight_mechanism")

	event.recipes.createMechanicalCrafting("create:redstone_mechanism", ["RMR"], {R: "minecraft:redstone", M: "create:precision_mechanism"}).id("create:mechanical_crafting/redstone_mechanism")

	event.recipes.createMixing("create:tasty_mechanism", ["create:precision_mechanism", Fluid.of("create:chocolate", 250)]).heated().id("create:mixing/tasty_mechanism")

	//Dimensional Mechanism Recipes
	

	//Combined Mechanism Recipes
	
	event.recipes.createMixing("create:ages_mechanism",
	["create:primitive_mechanism",
	"create:precision_mechanism",
	"create:thermal_mechanism",
	"create:mek_mechanism",
	"create:digital_mechanism",
	"create:simulated_mechanism"]).superheated().id("create:mixing/ages_mechanism")

	event.recipes.createMixing("create:dimensional_mechanism",
	["create:earthly_mechanism",
	"create:hellish_mechanism",
	"create:ender_mechanism"]).superheated().id("create:mixing/dimensional_mechanism")

	event.recipes.createMixing("create:utility_mechanism",
	["create:compact_mechanism",
	"create:watertight_mechanism",
	"create:redstone_mechanism",
	"create:tasty_mechanism"]).superheated().id("create:mixing/utility_mechanism")

	//Mechanism Base recipes
	event.recipes.thermal.press("create:primitive_base", "thermal:sawdust").id("create:primitive_base")
	event.recipes.thermal.bottler("8x create:precision_base", ["#minecraft:wooden_slabs", Fluid.of("tconstruct:molten_brass", 90)]).id("create:precision_base")
	event.recipes.mekanismMetallurgicInfusing("8x create:thermal_base", "#forge:ingots/invar", {infuse_type: "mekanism:redstone", amount: 80}).id("create:thermal_base")
	event.recipes.mekanismSawing("8x create:digital_base", "ae2:silicon").id("mekanism:sawing/silicon")
	event.recipes.mekanismInjecting("8x create:mek_base", "#forge:ingots/osmium", {gas: "mekanism:oxygen", amount: 2})
	event.custom(
	{type: "mekanism:nucleosynthesizing",
	itemInput: {ingredient: {tag: "minecraft:wooden_slabs", count: 5}},
	gasInput: {amount: 2, gas: "mekanism:antimatter"},
	output: {item: "create:ultimate_base", count: 1},
	duration: 400}).id("mekanism:nucleosynthesizing/ultimate_base")
})