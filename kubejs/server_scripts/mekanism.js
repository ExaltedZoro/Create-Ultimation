onEvent("recipes", event => {
    //Crystallizer
    event.custom({type:"mekanism:crystallizing", chemicalType: "gas", input:{amount: 25, gas:"mekanism:antimatter"}, output:{item: "mekanism:pellet_antimatter"}}).id("mekanism:processing/lategame/antimatter_pellet/from_gas")
    event.recipes.mekanismEnriching("ae2:certus_quartz_crystal", "ultimation:blue_quartz").id("create:compat/mek/enriching/blue_quartz")
})