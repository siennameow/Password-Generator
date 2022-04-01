// GOAL:    generatePassword() {
//   return "Please Try Again!" ;
// }
//Step 1: Assignment Code
var generateBtn = document.querySelector("#generate");

//Step 2: Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Step 3: Generate user pick.

//Step 3.1 create arrays for all letter source (Should have some better way , will check later)
var uppercaseSource = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseSource = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberSource = ["0","1","2","3","4","5","6","7","8","9"];
var specialSource = [" ","!","#","$","%","&","'","(",'"',")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];


//Step 3.2 create a function that draw random character from the source array.
function draw (pool){
  var pick1 =  Math.floor(Math.random() * pool.length);
  return pool[pick1];
}

//Step 3.3 create a function that record userpick and put different variable into different placeholder.
    //Make sure I got at least 1 character from the user picked array and add together all the user-pick-arrays to a remaim-array to draw the the rest of password. 
    //The character remain for drawing = the password length they select - how many character type they choose.
function record(userInput,sourceArray,recordResult, remainPool) {
  if (userInput === true){
    var record1Draw = draw(sourceArray);
    recordResult.push(record1Draw);
    remainPool.push(...sourceArray)
    }
}

//add a shuffle function, meow is a placeholder.
function shuffle(meow) {
  var currentIndex = meow.length,  randomIndex;
  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [meow[currentIndex], meow[randomIndex]] = [
      meow[randomIndex], meow[currentIndex]];
  }
  return meow;
}


//Step 3.4 create function that to generate user prompt/alert/confirm according to user preference.
function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to contain?");
  
  if (passwordLength === null || passwordLength< 8 || passwordLength > 128) {
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

            //Step 3.5 : if user complete the pick and "Good to go!", then do the function in step3.3
                var recordResult = [];
                var remainPool = [];

                record(uppercase,uppercaseSource,recordResult,remainPool);
                record(lowercase,lowercaseSource,recordResult,remainPool);
                record(number,numberSource,recordResult,remainPool);
                record(special,specialSource,recordResult,remainPool);

            //Step 3.6 :collect placeholder result and add it to the initial password.  
                var remainAttempt = passwordLength - (uppercase+lowercase+number+special);
                for (var i = 0; i<remainAttempt; i++) {
                      var record2Draw = draw(remainPool);
                      recordResult.push(record2Draw);
                    }

              // Step 3.7 : Shuffle the initial password to generate the final password.
                // console.log(recordResult.join("")); check the recorded-password
                var shuffledPassword = shuffle(recordResult);
                // console.log(shuffledPassword.join("")); check the final password, should be shuffled.
                var finalPassword = shuffledPassword.join("");
                return finalPassword;
          }
       } 
       return "Please try again!";
}

//Step 4: Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}






