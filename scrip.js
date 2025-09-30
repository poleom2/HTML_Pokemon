

//https://pokeapi.co/api/v2/pokemon
const typeColors = {
    bug:"#000",
    fire:"red",
    grass:"green",
    normal:"gray",
    water:"blue"




}
async function getPokemons(){
console.log("rodou função")

    const response = await fetch("https://pokeapi.co/api/v2/pokemon")
    console.log(response,"pokemons")
    const pokemons = await response.json()
    const ul = document.querySelector("ul")
    pokemons.results.forEach(async(pokemon)=>{
        console.log(pokemon,"pokemon")
        const li = document.createElement("li")
        const p = document.createElement("p")
        p.innerText = pokemon.name

        const response = await fetch(pokemon.url)
        const infos = await response.json()
        console.log(infos,"infos")
        li.setAttribute("style",`border: 3px solid ${typeColors[infos.types[0].type.name]}`)
        const img = document.createElement("img")
        img.src = infos.sprites.front_default
        const imgBack = document.createElement("img")
        imgBack.src = infos.sprites.front_shiny
        const divImgs = document.createElement("div")
        divImgs.append(img,imgBack)
        // const  hability = document.createElement("p")
        // hability.innerText = `Hability: ${infos.abilities[0].ability.name}`
        const experience = document.createElement("p")
        experience.innerText = `Base Experience: ${infos.base_experience}`

        const divAbilities = document.createElement("div")
        infos.abilities.forEach(async(item)=>{
            const response = await fetch(item.ability.url)
            const abilityInfo = await response.json()
             
            const divEntries = document.createElement("div")
              const nome = document.createElement("p")
                nome.innerText = `Habilidade: ${item.ability.name }`
                divEntries.append(nome)
            // abilityInfo.effect_entries.forEach((effect)=>{
            //     console.log(effect,"effect")
            //     // const p = document.createElement("p")
            //     // p.innerText = `Short effect ${effect.short_effect }`
               
            // })
            divAbilities.append(divEntries,nome)
        })

        const divAbilidadesEffect = document.createElement("div")
        // infos.abilities.forEach(async(item)=>{
        //     const effect = document.createElement("p")
        //     effect.innerText = `Effect: ${item.ability.effect_entries.effect }`
        //     divAbilidadesEffect.append(effect)

        // })

        li.append(divImgs,p,divAbilities, divAbilidadesEffect  ,experience)
        ul.append(li)
    })
}
getPokemons()