var charLength = 8;
var choices = [];

var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "{", "}", "<", ">"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];



// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// function generatePassword() {
//   console.log("clicked button")
// }

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  
if (correctPrompts) {
  var newPassword = generatePassword();
  
  passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  var password = ""
  for(var i = 0; i < charLength; ++i) {
  var randomLetter = Math.floor(Math.random() * choices.length);
password = password + choices[randomLetter];
  }
  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getPrompts(){
  choices = [];

  charLength = parseInt(prompt("How many characters would you like your password to be? (8-128 charecters"));

  if(isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert("Sorry, your character length has to be a number, 8-128 numbers. Please try again.");
    return false;
  }

  if (confirm("Would you like lowercase letters?")) {
    choices = choices.concat(lowerCase);
  }
  if (confirm("Would you like upper case letters?")) {
    choices = choices.concat(upperCase);
  }
  if (confirm("Would you like special characters?")) {
    choices = choices.concat(specialChar);
  }
  if (confirm("Would you like numbers?")) {
    choices = choices.concat(numbers);
  }
  return true;
}