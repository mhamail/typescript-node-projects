
const friends: string[] = ['Akram', 'Usama', 'Behuda', 'Ali', 'Khan', 'Asim']

function removeFriends() {
    if (friends.length > 2) {
        const del = friends.pop()
        console.log(`Sorry ${del}, i change my mood you are not invited`)
        removeFriends()
    }
    else{
     console.log(friends)
    friends.map((friend) => {
        console.log(`Dear friend ${friend} you are still invited`);
    })
   friends.pop()
   friends.pop()
    console.log(friends)
    }
}
removeFriends()
