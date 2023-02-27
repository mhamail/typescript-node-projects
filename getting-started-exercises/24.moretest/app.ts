const a: string = "Abc"
const b: string = "abc"
const c: string = "abc"

console.log(a === b ? "true" : "false")
console.log(a.toLowerCase() === b)

//and operator
if (a === b && b === c) {
    console.log("true")
}
//or operator
if (a === b || b === c) {
    console.log("true")
}
//Array
const arr = ["sample 1", "sample 2", "sample 3"]
if (arr.includes("sample 1")) {
    console.log("i predict true")
}

//for not
if (!arr.includes("sample 1")) {
    console.log("i predict true")
}