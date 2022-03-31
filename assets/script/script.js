// GOAL:    generatePassword() {
//   return "Please Try Again!" ;
// }

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//create arrays for all letter source (Should have some better way , will check later)
var uppercaseSource = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseSource = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberSource = ["0","1","2","3","4","5","6","7","8","9"];
var characterSource = [" ","!","#","$","%","&","'","(",'"',")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];



function generatePassword() {
  var password_length = prompt("Please enter length of the password");
  
  if (password_length === null || password_length< 8 || password_length > 128) {
    alert("Your password should be 8-128 caracters!");
 }
 
  else {
  var uppercase = confirm("Include Uppercase letter?");
  var lowercase = confirm("Include Uppercase letter?");
  var number = confirm("Include Uppercase letter?");
  var character = confirm("Include Uppercase letter?");
  
        if (uppercase + lowercase + number + character === 0) {
      alert("Your password should contain at least one character type!");
        }
        else {
        alert("You are good to go!");
        }
  }

}







