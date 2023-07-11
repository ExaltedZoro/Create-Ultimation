// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here

	let hideTool = (namespace, type) => {
		event.hide(namespace+":"+type+"_pickaxe")
		event.hide(namespace+":"+type+"_axe")
		event.hide(namespace+":"+type+"_sword")
		event.hide(namespace+":"+type+"_shovel")
		event.hide(namespace+":"+type+"_hoe")
	}

	hideTool("minecraft", "wooden")
	hideTool("minecraft", "stone")
	hideTool("minecraft", "iron")
	hideTool("minecraft", "golden")
	hideTool("minecraft", "diamond")
	hideTool("minecraft", "netherite")
	hideTool("ae2", "certus_quartz")
	hideTool("ae2", "fluix")
	hideTool("ae2", "nether_quartz")

	event.hide(["storagenetwork:request", "storagenetwork:import_kabel", "storagenetwork:import_filter_kabel", "storagenetwork:export_kabel", "storagenetwork:filter_kabel", "storagenetwork:exchange", "storagenetwork:collector", "storagenetwork:speed_upgrade", "storagenetwork:slow_upgrade", "storagenetwork:stack_upgrade", "storagenetwork:stock_upgrade", "storagenetwork:operation_upgrade", "storagenetwork:single_upgrade", "storagenetwork:inventory_remote", "storagenetwork:crafting_remote", "storagenetwork:picker_remote", "storagenetwork:collector_remote", "storagenetwork:builder_remote"])
	event.hide(["ae2:certus_crystal_seed", "ae2:fluix_crystal_seed"])

	//event.hide([Item.of("sophisticatedstorage:limited_barrel_1").ignoreNBT(), Item.of("sophisticatedstorage:limited_barrel_2").ignoreNBT(), Item.of("sophisticatedstorage:limited_barrel_3").ignoreNBT(), Item.of("sophisticatedstorage:limited_barrel_4").ignoreNBT()])
	//event.hide([Item.of("sophisticatedstorage:limited_iron_barrel_1").ignoreNBT(), Item.of("sophisticatedstorage:limited_iron_barrel_2").ignoreNBT(), Item.of("sophisticatedstorage:limited_iron_barrel_3").ignoreNBT(), Item.of("sophisticatedstorage:limited_iron_barrel_4").ignoreNBT()])
	//event.hide([Item.of("sophisticatedstorage:limited_gold_barrel_1").ignoreNBT(), Item.of("sophisticatedstorage:limited_gold_barrel_2").ignoreNBT(), Item.of("sophisticatedstorage:limited_gold_barrel_3").ignoreNBT(), Item.of("sophisticatedstorage:limited_gold_barrel_4").ignoreNBT()])
	//event.hide([Item.of("sophisticatedstorage:limited_diamond_barrel_1").ignoreNBT(), Item.of("sophisticatedstorage:limited_diamond_barrel_2").ignoreNBT(), Item.of("sophisticatedstorage:limited_diamond_barrel_3").ignoreNBT(), Item.of("sophisticatedstorage:limited_diamond_barrel_4").ignoreNBT()])
	//event.hide([Item.of("sophisticatedstorage:limited_netherite_barrel_1").ignoreNBT(), Item.of("sophisticatedstorage:limited_netherite_barrel_2").ignoreNBT(), Item.of("sophisticatedstorage:limited_netherite_barrel_3").ignoreNBT(), Item.of("sophisticatedstorage:limited_netherite_barrel_4").ignoreNBT()])
})

onEvent("client.generate_assets", event => {
	event.addLang("block.thermal.machine_crucible", "Electric Smeltery")
	event.addLang("block.mekanism.ultimate_mechanical_pipe", "Antimatter Infused Fluid Pipe")
	event.addLang("block.mekanism.ultimate_logistical_transporter", "Antimatter Infused Conveyor Belt")
	event.addLang("item.mekanism.teleportation_core", "Multiphasic Digitizer")

	event.addLang("item.ae2.certus_quartz_crystal", "Polished Blue Quartz")
	event.addLang("item.ae2.charged_certus_quartz_crystal", "Charged Blue Quartz Crystal")
	event.addLang("item.ae2.certus_quartz_wrench", "Blue Quartz Wrench")
	event.addLang("item.ae2.certus_quartz_dust", "Blue Quartz Dust")
	event.addLang("item.ae2.certus_quartz_cutting_knife", "Blue Quartz Cutting Knife")
	event.addLang("item.ae2.certus_crystal_seed", "Blue Quartz Seed")
	event.addLang("block.ae2.quartz_ore", "Blue Quartz Ore")
	event.addLang("block.ae2.deepslate_quartz_ore", "Deepslate Blue Quartz Ore")
	event.addLang("block.ae2.quartz_block", "Blue Quartz Block")
	event.addLang("block.ae2.quartz_pillar", "Blue Quartz Pillar")
	event.addLang("block.ae2.chiseled_quartz_block", "Chiseled Blue Quartz Block")
	event.addLang("block.ae2.quartz_stairs", "Blue Quartz Stairs")
	event.addLang("block.ae2.chiseled_quartz_stairs", "Chiseled Blue Quartz Stairs")
	event.addLang("block.ae2.quartz_pillar_stairs", "Blue Quartz Pillar Stairs")
	event.addLang("block.ae2.quartz_wall", "Blue Quartz Wall")
	event.addLang("block.ae2.chiseled_quartz_wall", "Chiseled Blue Quartz Wall")
	event.addLang("block.ae2.quartz_pillar_wall", "Blue Quartz Pillar Wall")
	event.addLang("block.ae2.quartz_slab", "Blue Quartz Slab")
	event.addLang("block.ae2.chiseled_quartz_slab", "Chiseled Blue Quartz Slab")
	event.addLang("block.ae2.quartz_pillar_slab", "Blue Quartz Pillar Slab")
})

onEvent("item.tooltip", tooltip => {
	
})

onEvent("jei.add.items", event => {
	event.add("create:chromatic_compound")
	event.add("create:refined_radiance")
	event.add("create:shadow_steel")
	event.add("create:shadow_steel_casing")
	event.add("create:refined_radiance_casing")

	storageTypes.forEach(type => {
		woods.forEach(element => {
			event.add(Item.of("sophisticatedstorage:"+type, {woodType: element}))
		})
	
		tiers.forEach(tier => {
			woods.forEach(wood => {
				event.add(Item.of("sophisticatedstorage:"+tier+"_"+type, {woodType: wood}))
			})
		})
	})

	tiers.forEach(tier => {
		event.add(Item.of("sophisticatedstorage:"+tier+"_shulker_box"))
	})

})

onEvent("jei.remove.recipes", event => {
	console.log(event.categoryIds)
})