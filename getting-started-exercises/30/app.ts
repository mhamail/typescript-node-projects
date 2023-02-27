const usernames = ['admin', 'john', 'alice', 'jane', 'tom'];

for (let i = 0; i < usernames.length; i++) {
  if (usernames[i] === 'admin') {
    console.log(`Hello admin, would you like to see a status report?`);
  } else {
    console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
  }
}

// usernames.map((name)=>{
//   if (name === 'admin') {
//     console.log(`Hello admin, would you like to see a status report?`);
//   } else {
//     console.log(`Hello ${name}, thank you for logging in again.`);
//   }
// })