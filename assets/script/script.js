// GOAL:    generatePassword() {
//   return "Please Try Again!" ;
// }

// Assignment Code
var generateBtn = document.querySelector("#generate");

// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


//create arrays for all letter source (Should have some better way , will check later)
var uppercaseSource = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseSource = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberSource = ["0","1","2","3","4","5","6","7","8","9"];
var specialSource = [" ","!","#","$","%","&","'","(",'"',")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];



function generatePassword() {
  var password_length = prompt("How many characters would you like your password to contain?");
  
  if (password_length === null || password_length< 8 || password_length > 128) {
    alert("Your password should be at least 8 characters and no more than 128 characters!");
 }
 
  else {
  var uppercase = confirm("Include uppercase characters?");
  var lowercase = confirm("Include lowercase characters?");
  var number = confirm("Include numeric characters?");
  var special = confirm("Include special characters?");
  
        if (uppercase + lowercase + number + special === 0) {
      alert("Your password should contain at least one character type!");
        }
        else {
        alert("You are good to go!");
        }
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





