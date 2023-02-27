

const friends : string[] = ["Usama","Ali","Khan"]
const bemarFriend = "Usama";
const newFriend = "Ezrail"

const updatedList=friends.filter((friend)=>{
return friend !== bemarFriend
})
updatedList.push(newFriend)

console.log(updatedList)