let magicians = ["David Blaine", "Teller"];

function showMagicians(magiciansArray:any) {
  for (let i = 0; i < magiciansArray.length; i++) {
    console.log(magiciansArray[i]);
  }
}

function makeGreat(magiciansArray:any) {
  for (let i = 0; i < magiciansArray.length; i++) {
    magiciansArray[i] = "The Great " + magiciansArray[i];
  }
}

console.log("Original list of magicians:");
showMagicians(magicians);
makeGreat(magicians);
console.log("Modified list of magicians:");
showMagicians(magicians);