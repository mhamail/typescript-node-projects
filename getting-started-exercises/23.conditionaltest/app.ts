const arr = ["sample 1", "sample 2", "sample 3"]
if (arr.includes("sample 1")) {
    console.log("i predict true")
}
else { console.log("false") }

arr.includes("sample 2") && console.log("i predict true")

arr.includes("sample 3") ?
    console.log("i predict true")
    : console.log("false")

const sample1 = "sample 1"
const sample2 = "sample 2"
const sample3 = "sample 3"
const sample4 = "sample 1"
const sample5 = "sample 2"
const sample6 = "sample1"
const sample7 = "sample1"
const sample8 = "sample1"
const sample9 = "sample1"
const sample10 = "sample1"
const sample11 = "sample1"

console.log(sample1 === arr[0] && "i predict true")
console.log(sample2 === arr[0] ? "i predict true" : "false")
console.log(sample3 === arr[0] ? "i predict true" : "false")
console.log(sample4 === arr[0] ? "i predict true" : "false")
console.log(sample5 === arr[0] ? "i predict true" : "false")
console.log(sample6 === arr[0] ? "i predict true" : "false")
console.log(sample7 === arr[0] ? "i predict true" : "false")
console.log(sample8 === arr[0] ? "i predict true" : "false")
console.log(sample9 === arr[0] ? "i predict true" : "false")
console.log(sample10 === arr[0] ? "i predict true" : "false")
console.log(sample11 === arr[0] ? "i predict true" : "false")