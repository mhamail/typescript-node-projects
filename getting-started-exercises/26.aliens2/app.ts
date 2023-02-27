const alien = {
    color: "green" || "red" || "yellow"
}
let shotAlien = Math.random() * 10

if (shotAlien < 3) {
    alien.color = "green"
}

if (alien.color === "green") {
    console.log("player earned 5 point")
}
else {
    console.log("player earned 10 point")
}