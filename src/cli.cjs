let readlineSync = require('readline-sync');

// Wait for user's response.
const askUserName = () => {
  let userName = readlineSync.question('May I have your name? ');
console.log('Hi, ' + userName + '!');

}

module.exports = {askUserName};