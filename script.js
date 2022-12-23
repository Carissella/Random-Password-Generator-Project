// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword () { 
  var options = []
  var passwordLength = prompt ("Choose a length of atleast 8 to 128 characters.");
  if (confirm("Would you like to include lowercase characters?")) {
    options = options.concat(lowerCaseLetters);
  }
  if (confirm("Would you like to include uppercase characters?")) {
    options = options.concat(upperCaseLetter);
  }
  if (confirm("Would you like to include special characters?")) {
    options = options.concat(specialCharacters);
  }
  if (confirm("Would you like to include number characters?")) {
    options = options.concat(numbers);
  }
  var newPassword = "";
  for (i = 0; i < passwordLength; i++) {
    newPassword += options[Math.floor(Math.random()* options.length)];
  }
  return newPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
