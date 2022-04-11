// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

// generateBtn.addEventListener("click", writePassword);

let lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
let upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let randomNumbers = "0123456789";
let specialCharacters = "!@#$%^&*(){}|?><";
let genPassword = "";

let confirmLength = "";
let confirmLowerCaseAlphabet;
let confirmUpperCaseAlphabet;
let confirmSpecialCharacters;
let confirmRandomNumbers;

// Prompt to confirm password paramaters 
function generatePassword() {
  let confirmLength = (prompt("How many characters would you like your password to be? It can be contain anywhere between 8-128 characters"));

  while(confirmLength <= 7 || confirmLength >= 129) {
    alert("Password length must be between 8-128 characters Try again");
    let confirmLength = (prompt("How many characters would you like your password to contain?"));
    } 

    alert(`Your password will have ${confirmLength} characters`);

    let confirmLowerCaseAlphabet = confirm("Click OK to confirm lowercase characters");
    let confirmUpperCaseAlphabet = confirm("Click OK to confirm uppercase characters");
    let confirmSpecialCharacters = confirm("Click OK to confirm special characters");
    let confirmRandomNumbers = confirm("Click OK to confirm numeric characters");
    while(confirmLowerCaseAlphabet === false && confirmUpperCaseAlphabet === false && confirmSpecialCharacters === false && confirmRandomNumbers === false) {
      alert("You must choose at least one parameter");
    }
    if (confirmLowerCaseAlphabet) {
      passwordCharacters = passwordCharacters(lowerCaseAlphabet);
    }

    if (confirmUpperCaseAlphabet) {
      passwordCharacters = passwordCharacters(upperCaseAlphabet);
    }

    if (confirmSpecialCharacters) {
      passwordCharacters = passwordCharacters(specialCharacters);
    }

    if (confirmRandomNumbers) {
      passwordCharacters = passwordCharacters(randomNumbers);
    }

    let randomPassword = "";
    for (var i = 0; i < confirmLength; i++) {
      genPassword = genPassword + passwordCharacters(Math.floor(Math.random() * passwordCharacters.length));
      console.log(genPassword)
    }
    return randomPassword;
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector();
  passwordText.value = password;
}
