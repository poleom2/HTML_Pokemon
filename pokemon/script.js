const typeColors ={
    normal:"lightgray",
    fire:"orange",
    water:"blue",
    grass:"green",
    electric:"yellow",
    ice:"lightblue",
    fighting:"brown",
    poison:"purple",
    ground:"tan",
    flying:"aqua",
    psychic:"violet",   
    bug:"lime",
    rock:"darkgray",
    ghost:"indigo",
    dragon:"darkblue",
    dark:"black",
    steel:"silver",
    fairy:"pink"
}

function getPokemon(){
    const infos = JSON.parse(localStorage.getItem("pokemon"))
    console.log(infos, "pokemon")
}
getPokemon()

const main = document.querySelector("main")
const infos = JSON.parse(localStorage.getItem("pokemon"))
const namepoke = document.createElement("h1")
namepoke.innerText = infos.name
const herder = document.querySelector("header")
const img = document.createElement("img")
const img2 = document.createElement("img")
img2.src = infos.sprites.other.showdown.front_default
img.src =  infos.sprites.other.dream_world.front_default

herder.append(namepoke,img,img2)




 function getHabilidades()
    {
        const experience = document.createElement("p")
        experience.innerText ="Base experience: " + infos.base_experience
        experience.style.padding="0 24px"
        const Habidades = document.querySelector(".Habilidades")
       
        const button = document.createElement("button")
        button.classList.add("btn_Sair")
        button.innerText = "Voltar"
        button.style.border= "3px solid " + typeColors[infos.types[0].type.name]
        button.addEventListener("click",()=>{
            location.href = "/"
        })
        
        main.append(experience,button)
        
        infos.abilities.forEach(async(item)=>{
            const response = await fetch(item.ability.url)
            const abilityInfo = await response.json()
            const p = document.createElement("span")
            p.innerText ="Habilidade: " + item.ability.name
            const effect = document.createElement("p")
            effect.innerText = abilityInfo.effect_entries[1].effect
            
            Habidades.append(p,effect)
            
        }) 
        main.append(experience , button)
}
  
    getHabilidades()






    herder.style.backgroundColor=typeColors[infos.types[0].type.name]
    document.querySelector(".Habilidades").style.border= "2px solid "+typeColors[infos.types[0].type.name]
 

