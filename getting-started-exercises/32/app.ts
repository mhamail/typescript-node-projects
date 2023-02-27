const current_users = ['john', 'usama', 'akran', 'sam'];
const new_users = ['ali', 'Usama', 'Bob', 'akram', ];

for (let i = 0; i < new_users.length; i++) {
  const new_username = new_users[i];
  let username_exists = false;

  for (let j = 0; j < current_users.length; j++) {
    if (current_users[j].toLowerCase() === new_username.toLowerCase()) {
      username_exists = true;
      break;
    }
  }

  if (username_exists) {
    console.log(`Sorry, the username '${new_username}' is not available. Please enter a new username.`);
  } else {
    console.log(`Congratulations, the username '${new_username}' is available!`);
  }
}