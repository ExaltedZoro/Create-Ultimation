onEvent("recipes", event =>{
    let oreProcessing = (namespace, type, temp) =>{
        let crushed_ore = "create:crushed_raw_"+type
        let raw_ore = namespace+":raw_"+type
        let ingot = ""
        let nugget = ""
        let block = ""
        let dust = ""
        if(namespace == "minecraft")
        {
            dust = "thermal:"+type+"_dust"
        }else if(namespace == "mekanism")
        {
            dust = "mekanism:dust_"+type
        }else
        {
            dust = namespace+":"+type+"_dust"
        }
        if(namespace != "mekanism")
        {
            ingot = namespace+":"+type+"_ingot"
            nugget = namespace+":"+type+"_nugget"
            block = namespace+":raw_"+type+"_block"
        }else
        {
            ingot = namespace+":ingot_"+type
            nugget = namespace+":nugget_"+type
            block = namespace+":block_raw_"+type
        }
        //Smelting directly from Raw Ore or Crushed Ore
        event.smelting("3x "+nugget, raw_ore).id("minecraft:smelting/raw_"+type)
        event.smelting("3x "+ingot, block).id("minecraft:smelting/raw_"+type+"_block")
        event.smelting("3x "+nugget, crushed_ore).id("minecraft:smelting/crushed_raw_"+type)
        event.blasting("3x "+nugget, raw_ore).id("minecraft:blasting/raw_"+type)
        event.blasting("3x "+ingot, block).id("minecraft:blasting/raw_"+type+"_block")
        event.blasting("3x "+nugget, crushed_ore).id("minecraft:blasting/crushed_raw_"+type)
        
        event.recipes.createMilling([crushed_ore, Item.of("create:experience_nugget").withChance(0.75)], namespace+":raw_"+type).id("create:milling/raw_"+type)
        event.recipes.createCrushing([crushed_ore, "create:experience_nugget"], namespace+":raw_"+type).id("create:crushing/raw_"+type)
        event.recipes.createCrushing(["9x "+crushed_ore, "9x create:experience_nugget"], block).id("create:crushing/raw_"+type+"_block")
        event.recipes.createMilling("3x "+dust, crushed_ore).id("create:milling/crushed_raw_"+type)
        event.recipes.createCrushing(["3x "+dust, Item.of("3x "+dust).withChance(0.25)], crushed_ore).id("create:crushing/crushed_raw_"+type)
        event.recipes.thermal.pulverizer("6x "+dust, crushed_ore).energy(4000).id("thermal:compat/create/pulverizer_create_crushed_raw_"+type)
        event.smelting(nugget, dust)
        event.blasting(nugget, dust)
        event.custom(
            {
                type: "tconstruct:melting",
                ingredient: {item: dust},
                result: {fluid: "tconstruct:molten_"+type, amount: 30},
                temperature: temp,
                time: 40
            }
        ).id("tconstruct:smeltery/melting/metal/"+type+"/dust")
        event.recipes.thermal.crucible(Fluid.of("tconstruct:molten_"+type, 30), dust).id("thermal:machines/crucible/"+type+"_dust")
        event.recipes.createMixing("18x "+nugget, ["3x "+dust, Fluid.of("create_enchantment_industry:experience", 3)]).heated().id("create:mixing/experience_"+type)
        event.recipes.createMixing(
            Fluid.of("tconstruct:molten_"+type, 270),
            ["3x "+dust, Fluid.of("create_enchantment_industry:hyper_experience", 1)]
        ).superheated().id("create:mixing/hyper_experience_"+type)

        event.custom(
            {
                type: "tconstruct:melting",
                rate: "metal",
                ingredient: {item: block},
                result: {fluid: "ultimation:liquid_slag", amount: 405},
                temperature: temp,
                time: 180,
                byproducts: [{fluid: "tconstruct:molten_"+type, amount: 810}]
            }
        ).id("tconstruct:smeltery/melting/metal/"+type+"/raw_block")

        event.custom(
            {
                type: "tconstruct:melting",
                rate: "metal",
                ingredient: {item: raw_ore},
                result: {fluid: "ultimation:liquid_slag", amount: 45},
                temperature: temp,
                time: 60,
                byproducts: [{fluid: "tconstruct:molten_"+type, amount: 90}]
            }
        ).id("tconstruct:smeltery/melting/metal/"+type+"/raw")
    }

    oreProcessing("minecraft", "iron", 800)
    oreProcessing("minecraft", "copper", 500)
    oreProcessing("minecraft", "gold", 700)
    oreProcessing("create", "zinc", 420)
    oreProcessing("thermal", "tin", 225)
    oreProcessing("thermal", "silver", 790)
    oreProcessing("thermal", "lead", 330)
    oreProcessing("thermal", "nickel", 950)
    oreProcessing("mekanism", "osmium", 975)
    oreProcessing("mekanism", "uranium", 830)

    event.recipes.createSplashing(["3x minecraft:iron_nugget", Item.of("minecraft:redstone").withChance(0.75)], "create:crushed_raw_iron").id("create:splashing/crushed_raw_iron")
    event.recipes.createSplashing(["3x minecraft:copper_nugget", Item.of("minecraft:clay_ball").withChance(0.5)], "create:crushed_raw_copper").id("create:splashing/crushed_raw_copper")
    event.recipes.createSplashing(["3x minecraft:gold_nugget", Item.of("minecraft:quartz").withChance(0.5)], "create:crushed_raw_gold").id("create:splashing/crushed_raw_gold")
    event.recipes.createSplashing(["3x create:zinc_nugget", Item.of("minecraft:gunpowder").withChance(0.25)], "create:crushed_raw_zinc").id("create:splashing/crushed_raw_zinc")
    event.recipes.createSplashing("3x thermal:nickel_nugget", "create:crushed_raw_nickel").id("create:splashing/thermal/crushed_raw_nickel")
    event.recipes.createSplashing("3x thermal:tin_nugget", "create:crushed_raw_tin").id("create:splashing/thermal/crushed_raw_tin")
    event.recipes.createSplashing("3x thermal:silver_nugget", "create:crushed_raw_silver").id("create:splashing/thermal/crushed_raw_silver")
    event.recipes.createSplashing("3x thermal:lead_nugget", "create:crushed_raw_lead").id("create:splashing/mekanism/crushed_raw_lead")
    event.recipes.createSplashing("3x mekanism:nugget_osmium", "create:crushed_raw_osmium").id("create:splashing/mekanism/crushed_lead_osmium")
    event.recipes.createSplashing("3x mekanism:nugget_uranium", "create:crushed_raw_uranium").id("create:splashing/mekanism/crushed_raw_uranium")



})