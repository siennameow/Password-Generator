# Password-Generator🔥

## Description 📝 

Using password day-to-day? Passwords are a real security threat. Over 80% of hacking-related breaches are due to weak or stolen passwords, a recent report shows . So if you want to safeguard your personal info and assets, creating secure passwords is a big first step. And that’s where this Password Generator can help - to generate a password as you want within a minute!

This impossible-to-crack password is complex with multiple types of characters (uppercase, lowercase, numeric, special symbol) and you can select the length of the password (from 8 to 128 characters).This password generator tool is hosted on a webpage and easy for you to access through one link : https://siennameow.github.io/Password-Generator/. 

More importantly, the passwords you generate are never sent across the web.

Please Enjoy! ❤️

## Table of Contents 📖

* [Webpage Preview ⭐](#webpage-preview-)
* [Code-Snippet 💻](#code-snippet-)
* [Custom-Features 📋](#custom-features-)
* [Usage 💡](#usage-)
* [Skill-Improved 📚](#skill-improved-)
* [Technologies 🔧](#technologies-)
* [Authors 👩](#authors-)
* [Credits 🙌](#credits-)

## Webpage Preview ⭐
 
![Screen Recording 2022-03-31 at 10 15 57 PM (1)](https://user-images.githubusercontent.com/101283174/161199812-3d87d83e-1d16-4aa8-b67f-d79bd60fb3ad.gif)


## Custom Features 📋

⚡️Choose Password Length\
⚡️ Uppercase Character\
⚡️ Lowercase Character\
⚡️ Numeric Character\
⚡️ Special Character\

## Code-Snippet 💻

JavaScript

Create a function that draw random character from an array.
```JavaScript
function draw (pool){
  var pick1 =  Math.floor(Math.random() * pool.length);
  return pool[pick1];
}
```

The Window confirm() create user interaction and generate user select result.
```JavaScript
   var uppercase = confirm("Include uppercase characters?");
   var lowercase = confirm("Include lowercase characters?");
   var number = confirm("Include numeric characters?");
   var special = confirm("Include special characters?");
```

The "if-else Statement" make sure user select at least one character type
```JavaScript
   if (uppercase + lowercase + number + special === 0) {
            alert("Your should select at least one character type!");
          }
  else {
          alert("You are good to go!");
        }
```


## Usage 💡

The link of the webpage is: https://siennameow.github.io/Password-Generator/

- Step 1: Load the webpage.
- Step 2 :Click the red “generate” button to start. 
- Step 3 :Select the length and which character type you want to include in your password by simply clicking “yes” or “no” button to answer a few questions on the pop-up window.
- Step 4 :After selection, your password will be generated in a second and shown on the webpage. 
- Step 5 :Copy and paste the password for your use.

Please note that:
The length of the password should be at least 8 and no more than 128.
You must select at least one character type in order to be validated.

## Skill Improved 📚
✔️ JavaScript Random Integers\
✔️ HTML DOM Document querySelector\
✔️ HTML DOM Element addEventListener\
✔️ JavaScript Window Popup Alert/Confirm/Promt\
✔️ JavaScript For Loop/JavaScript While Loop


## Technologies 🔧

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Authors 👩

* **Sienna Li** 

- [Portfolio](#)
- [Github](https://github.com/siennameow)
- [LinkedIn](https://www.linkedin.com/in/hexuanli/)


## Credits 🙌

Thanks to the following people who helped me in this project:
- Jerome Chenette
- Manuel Nunes
- Vince Lee
