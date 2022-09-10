// basic JavaScript function
function runCodeFromTerminal() {
  let string1 = "welcome ";
  let string2 = "to the";
  let string3 = "COMP CLASS 229!";
  console.log(string1, string2, string3);
}

// call the function on run the file.
runCodeFromTerminal();

alpha = (word) => console.log("Hi! " + word);
alpha("Sosad");

function userFriends(user, ...friends) {
  console.log(user + ' has ' + friends.length + ' friends');
  for (const arg of friends) {
    console.log("Friend name: ", arg);
  }
}
userFriends('User', 'Bob', 'Alice');
let fds = ['Bob', 'Alice', 'Peter', 'OKOK'];
userFriends('User', ...fds);
  