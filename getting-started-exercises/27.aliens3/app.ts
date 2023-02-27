const alien = {
    color: "green" || "red" || "yellow"
}
let shotAlien = Math.random() * 10

if (shotAlien < 3) {
    alien.color = "green"
}
else if (shotAlien > 3 && shotAlien < 5) {
    alien.color = "yellow"
}
else {
    alien.color = "red"
}

if (alien.color === "green") {
    console.log("player earned 5 point")
}
else if (alien.color === "yellow") {
    console.log("player earned 10 point")
}
else {
    console.log("player earned 15 point")
}