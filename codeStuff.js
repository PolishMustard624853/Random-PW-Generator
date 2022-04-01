// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

// generateBtn.addEventListener("click", writePassword);

let lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
let upperCaseAlphabet = lowerCaseAlphabet.toLocaleUpperCase();
let randomNumbers = "0123456789";
let specialCharacters = "!@#$%^&*(){}|?><";
// let genPassword = "";

// Variable confirmations
let confirmLength = "";
let confirmLowerCaseAlphabet;
let confirmUpperCaseAlphabet;
let confirmSpecialCharacters;

function generatePassword() {
  let confirmLength = (prompt("How many characters would you like your password to be? It can be contain anywhere between 8-128 characters"));
}

alert('Your password will contain ${confirmLength} characters');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
