// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

// generateBtn.addEventListener("click", writePassword);

let lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
let upperCaseAlphabet = lowerCaseAlphabet.toLocaleUpperCase();
let randomNumbers = "0123456789";
let specialCharacters = "!@#$%^&*(){}|?><";
let genPassword = "";

// Variable confirmations
let confirmLength = "";
let confirmLowerCaseAlphabet;
let confirmUpperCaseAlphabet;
let confirmSpecialCharacters;
let confirmRandomNumbers;

// Given a prompt to confirm password paramaters
function generatePassword() {
  let confirmLength = (prompt("How many characters would you like your password to be? It can be contain anywhere between 8-128 characters"));

  while(confirmLength <= 7 || confirmLength >= 51) {
    alert("Password length must be between 8-50 characters Try again");
    let confirmLength = (prompt("How many characters would you like your password to contain?"));
    } 

    alert(`Your password will have ${confirmLength} characters`);

    let confirmLowerCaseAlphabet = confirm("Click OK to confirm lowercase characters");
    let confirmUpperCaseAlphabet = confirm("Click OK to confirm uppercase characters");
    let confirmSpecialCharacters = confirm("Click OK to confirm special characters");
    let confirmRandomNumbers = confirm("Click OK to confirm numeric characters");
    while(confirmLowerCaseAlphabet === false && confirmUpperCaseAlphabet === false && confirmSpecialCharacters === false && confirmRandomNumbers === false) {
      alert("You must choose at least one parameter");
      let confirmLowerCaseAlphabet = confirm("Click OK to confirm lowercase characters");
      let confirmUpperCaseAlphabet = confirm("Click OK to confirm uppercase characters");
      let confirmSpecialCharacters = confirm("Click OK to confirm special characters");
      let confirmRandomNumbers = confirm("Click OK to confirm numeric characters");
    }
}
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
