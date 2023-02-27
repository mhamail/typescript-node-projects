const alien = {
    color: "green" || "red" || "yellow"
}
let shotAlien = Math.random() * 10
console.log(shotAlien)
if (shotAlien > 5) {
    console.log("red alien shot")
}
if (shotAlien > 3 && shotAlien < 5) {
    console.log("yellow alien shot")
}
if (shotAlien < 3) {
    console.log("green alien shot,you earned 5 points")
}