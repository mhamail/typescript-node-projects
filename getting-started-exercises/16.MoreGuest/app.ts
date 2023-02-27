
const friends : string[] = ["Usama","Ali","Khan"]
const newFriend = "Akram"

friends.splice(0,0,newFriend)

const middleFriend = "Behuda"
const middleNumber = Math.floor(friends.length/2);

friends.splice(middleNumber,0,middleFriend)

const lastFriend = "Asim"

friends.push(lastFriend)
 console.log(friends)

friends.map((friend)=>{
console.log(`Dear friend ${friend} your today dinner at my home`);
})