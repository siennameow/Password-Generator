// GOAL:    generatePassword() {
//   return "Please Try Again!" ;
// }

//Step 1: Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Step 2: Generate user pick.

//Step 2.1 create arrays for all letter source (Should have some better way , will check later)
var uppercaseSource = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseSource = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberSource = ["0","1","2","3","4","5","6","7","8","9"];
var specialSource = [" ","!","#","$","%","&","'","(",'"',")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];


//Step 2.2 create a function that draw random character from the source array.
//Step 2.3 create a function that record userpick and put different variable into different placeholder.

//Step 2.4 create function that to generate user prompt/alert/confirm according to user preference.
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
      alert("Your should select at least one character type!");
        }
        else {
        alert("You are good to go!");
        }
//Step 2.5 : if user complete the pick, then do the function in step2.3



//Step 2.6 :collect placeholder result and add it to the final password.



  }

}



//Step 3: Assignment Code
var generateBtn = document.querySelector("#generate");


//Step 4: Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}






