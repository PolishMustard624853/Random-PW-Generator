// Assignment Code
document.querySelector('#generate').addEventListener('click', writePassword);
// let generateBtn = document.querySelector("#generate");
var lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var special = '!@#$^&%*()+=-[]{}|:<>?,.'.split('');
var numbers = '1234567890'.split('');

let pwd = '';

let confirmLength = "";
let confirmSpecialCharacter;
let confirmNumericCharacter;
let confirmUpperCase;
let confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  let confirmLength = (prompt('How many characters would you like your password to contain?'));

  // Loop if answer is outside the parameters 
  while(confirmLength <= 7 || confirmLength >= 51) {
      alert('Password length must be between 8-50 characters Try again');
      let confirmLength = (prompt('How many characters would you like your password to contain?'));
      } 

      // Repeat back how many charactes the user will have  
      alert(`Your password will have ${confirmLength} characters`);

    // Determine parameters of password 
    let confirmSpecialCharacter = confirm('Click OK to confirm if you would like to include special characters');
    let confirmNumericCharacter = confirm('Click OK to confirm if you would like to include numeric characters');    
    let confirmLowerCase = confirm('Click OK to confirm if you would like to include lowercase characters');
    let confirmUpperCase = confirm('Click OK to confirm if you would like to include uppercase characters');
      // Loop if answer is outside the parameters 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert('You must choose at least one parameter');
        let confirmSpecialCharacter = confirm('Click OK to confirm if you would like to include special characters');
        let confirmNumericCharacter = confirm('Click OK to confirm if you would like to include numeric characters');    
        let confirmLowerCase = confirm('Click OK to confirm if you would like to include lowercase characters');
        let confirmUpperCase = confirm('Click OK to confirm if you would like to include uppercase characters');   
    } 

      // Assign an action to the password parameters NEED TO FIX THIS
      let passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(special)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(numbers)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(lower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(upper)
    }

      console.log(passwordCharacters)

      // Empty string to be filled based on for loop selecting random characters from the array
      let randomPassword = ''
      
      for (let i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}