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

function userChoice() {
  var password_length = prompt("Please enter length of the password");
  
  if (password_length === null || password_length< 8 || password_length > 128) {
    alert("Your password should be 8-128 caracters!");
 }
 
 else {
  var uppercase = confirm("Include Uppercase letter?");
  var lowercase = confirm("Include Uppercase letter?");
  var numeric = confirm("Include Uppercase letter?");
  var specialcharacter = confirm("Include Uppercase letter?");
  
        if (uppercase + lowercase + numeric + specialcharacter === 0) {
      alert("Your password should contain at least one character type!");
        }
        else {
        alert("You are good to go!");
        }
  }

}