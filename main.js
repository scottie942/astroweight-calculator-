
let planets = [ 
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9]
];

   let select = document.getElementById("planets")

planets.reverse().forEach(function(item) {
   let option = document.createElement("option")
   option.value = item[0] 
    option.text = item[0]
    select.appendChild(option)
});

function calculateWeight(weight, planetName) {
    for (let i = 0; i < planets.length; i++) {
       if(planetName == planets[i][0]) {
           return weight * planets[i][1];
       } 
    }
}

let calculate = document.getElementById("calculate-button");

calculate.onclick = function handleClickEvent() {
    
    let userWeight = document.getElementById("user-weight").value
    let planetName = document.getElementById("planets").value
   let result = calculateWeight(userWeight, planetName)

if (!userWeight || isNaN(userWeight)) {
    document.getElementById("output").innerHTML = ""
} else {
    document.getElementById("output").innerHTML = 
    `If you were on <span class="textcolor">${planetName}</span>, you would weigh <span class="textcolor">${Math.round(result*10)/10}</span>lbs!`
    }  
}








