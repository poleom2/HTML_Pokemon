

//https://pokeapi.co/api/v2/pokemon

const typesColors = {
   bug:"#000",
    fire:"red",
    grass:"green",
    normal:"gray",
    water:"blue",
    poison:"purple",
    electric:"yellow",
    ground:"brown",
    fairy:"pink",
    fighting:"orange",
    psychic:"violet",
    rock:"darkgray",
    ghost:"indigo",
    ice:"lightblue",
    dragon:"darkblue",
    dark:"black",
    steel:"silver",
    flying:"aqua"
}
// const typesClasses ={
//     grass:"grass",
//     fire:"fire",
//     water:"water"
// }
async function getPokemons(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon")
    const pokemons = await response.json()
    const ul = document.querySelector("ul")
    pokemons.results.forEach(async(pokemon)=>{

        const li = document.createElement("li")
       
        const p = document.createElement("p")
        p.innerText = pokemon.name

        const response = await fetch(pokemon.url)
        const infos = await response.json()
        console.log(infos,"infos")
        //adicionando estilo de acordo com o tipo
         //li.setAttribute("style",`background-color:${typesColors[infos.types[0].type.name]};`)
         li.setAttribute("style",`border: 3px solid ${typesColors[infos.types[0].type.name]}`)
        //clicar e navegar pra página do pokemon
         li.addEventListener("click",()=>{
           //JSON.
            localStorage.setItem("pokemon",JSON.stringify(infos))
            location.href = "/pokemon"
        })
        const img = document.createElement("img")
        img.src = infos.sprites.front_default
       //expeirence
        const experience = document.createElement("p")
        experience.innerText ="Base experience: " + infos.base_experience

        //abilities
        const abilities = document.createElement("div")
        const abilityTitle = document.createElement("p")
        abilityTitle.innerText = "Abilities"
        abilities.append(abilityTitle)
        infos.abilities.forEach((item)=>{
            const ability = document.createElement("p")
            ability.innerText = item.ability.name
            abilities.append(ability)
        })
        
        li.append(img,p,experience,abilities)
        ul.append(li)
    })
}
getPokemons()