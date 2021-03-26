const chanceColor = document.getElementById('btn')
const hexColor = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

chanceColor.addEventListener('click', function(){
    let hex = '#'
for(let i=0; i<6; i++){
    hex += hexColor[getRandomNumber()]
}
console.log(hex)
document.body.style.backgroundColor = hex
document.getElementById('color').innerHTML = hex
})

function getRandomNumber(){
return Math.floor(Math.random()* hexColor.length)
}