// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	
	//Misc Items
	event.create("ultimation:redstone_crystal").displayName("Energetic Redstone Crystal")
	event.create("ultimation:red_amethyst").displayName("Red Amethyst Shard")
	event.create("ultimation:incomplete_silicon", "create:sequenced_assembly").displayName("Impure Silicon")
	event.create("create:zinc_dust").displayName("Zinc Dust")
	event.create("ultimation:blue_quartz").displayName("Blue Quartz")
	event.create("minecraft:copper_nugget").displayName("Copper Nugget").texture("create:item/copper_nugget")
	event.create("create:incomplete_chromatic_compound", "create:sequenced_assembly").displayName("§eIncomplete Chromatic Compound").texture("create:item/chromatic_compound_0")

	//Main Progression Mechanisms
	event.create("create:primitive_mechanism").displayName("Primitive Mechanism").tooltip("A simple, but versatile mechanism")
	event.create("create:incomplete_primitive_mechanism", "create:sequenced_assembly").displayName("Incomplete Primitive Mechanism").texture("create:item/primitive_base")
	event.create("create:primitive_base").displayName("Primitive Mechanism Base")

	event.create("create:precision_base").displayName("Precision Mechanism Base").texture("create:item/incomplete_precision_mechanism")

	event.create("create:thermal_mechanism").displayName("§6Thermal Mechanism").tooltip("Your first foray into the world of electric machines")
	event.create("create:incomplete_thermal_mechanism", "create:sequenced_assembly").displayName("§6Incomplete Thermal Mechanism").texture("create:item/thermal_base")
	event.create("create:thermal_base").displayName("§6Thermal Mechanism Base")

	event.create("create:digital_mechanism").displayName("§6Digital Mechanism").tooltip("A mechanism capable of storing large amounts of data")
	event.create("create:incomplete_digital_mechanism", "create:sequenced_assembly").displayName("§6Incomplete Digital Mechanism").texture("create:item/digital_base")
	event.create("create:digital_base").displayName("§6Digital Mechanism Base")

	event.create("create:mek_mechanism").displayName("§bMekanical Mechanism").tooltip("Now this can make some serious machines")
	event.create("create:incomplete_mek_mechanism", "create:sequenced_assembly").displayName("§bIncomplete Mekanical Mechanism").texture("create:item/mek_base")
	event.create("create:mek_base").displayName("§bMekanical Mechanism Base")

	event.create("create:simulated_mechanism").displayName("§bSimulated Mechanism").tooltip("An object on the line between physical and digital")
	event.create("create:incomplete_simulated_mechanism", "create:sequenced_assembly").displayName("§bIncomplete Simulated Mechanism")
	event.create("create:simulated_base").displayName("§bSimulated Mechanism Base")

	event.create("create:ultimate_mechanism").displayName("§dUltimate Mechanism").tooltip("The §dUltimate §fcreation of mankind").glow(true)
	event.create("create:incomplete_ultimate_mechanism", "create:sequenced_assembly").displayName("§dIncomplete Ultimate Mechanism").glow(true).texture("create:item/ultimate_base")
	event.create("create:ultimate_base").displayName("§dUltimate Mechanism Base").texture("create:item/ultimate_base").glow(true)

	//Side Chapter Mechanisms
	event.create("create:compact_mechanism").displayName("Compact Mechanism").tooltip("Same thing, but smaller")

	event.create("create:watertight_mechanism").displayName("Watertight Mechanism").tooltip("Signed, sealed and delivered")

	event.create("create:redstone_mechanism").displayName("Redstone Mechanism").tooltip("Just a little taste of energy")

	event.create("create:tasty_mechanism").displayName("Tasty Mechanism").tooltip("Chocolate-coated honey-glazed goodness").food(food => {food.hunger(20).saturation(0.5)})

	event.create("create:earthly_mechanism").displayName("§2Earthly Mechanism").tooltip("It almost made itself")

	event.create("create:hellish_mechanism").displayName("§4Hellish Mechanism").tooltip("You can almost hear it screaming")

	event.create("create:ender_mechanism").displayName("§dVoid Touched Mechanism").tooltip("Infinite nothingness")

	//Combined Mechanisms
	event.create("create:ages_mechanism").displayName("Mechanism of the Ages").glow(true)
	event.create("create:dimensional_mechanism").displayName("Dimensional Mechanism").glow(true)
	event.create("create:utility_mechanism").displayName("Utility Mechanism").glow(true)
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

onEvent("fluid.registry", event => {
	event.create("ultimation:molten_nether_star").thickTexture(0xF1F1F1).bucketColor(0xF1F1F1).displayName("Molten Nether Star")
	event.create("ultimation:liquid_prediction").thinTexture(0x4D4D4D).bucketColor(0x4D4D4D).displayName("Liquid Prediction")
	event.create("ultimation:pure_silicon").displayName("Pure Silicon Crystals").noBlock().stillTexture("ultimation:fluid/fine_silicon")
	event.create("ultimation:fine_sand").displayName("Fine Sand").noBlock().stillTexture("ultimation:fluid/fine_sand")

	event.create("ultimation:liquid_slag").displayName("Liquid Slag").thickTexture(0x998479).bucketColor(0x998479)
})