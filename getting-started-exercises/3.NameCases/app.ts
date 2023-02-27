let person_name : string = "Eric";
let lowerCase : string = person_name.toLowerCase();
let upperCase : string = person_name.toUpperCase();

//for title case
let title="Eric is a good man"
let titletoArray=title.toLowerCase().split(' ') 

//method 1
// const titleCase = titletoArray.map(word=>
// word.charAt(0).toUpperCase() + word.slice(1)
// ).join(' ')

//method 2
const titleCase = titletoArray.map(word=>
word.replace(word[0],word[0].toUpperCase())
).join(' ')

console.log(`lowerCase:${lowerCase} \n
upperCase:${upperCase} \n
titleCase:${titleCase}
`)