// Assignment code here

function generatePassword(){

  var passwordLength = parseInt(window.prompt("How long the password (8-128 characters", ""), 10);
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    var passwordLength = parseInt(window.prompt("enter password length ", " "), 10);
  };

  var lowerConfirm = window.confirm("Would you like to use LowerCase")
  var upperConfirm = window.confirm("Would you like to use UpperCase")
  var specialConfirm = window.confirm("Would you like to use SpecialCase")
  var numberConfirm = window.confirm("Would you like to use NumberCase")


//variables use
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const special = "!\@\#$^&%*()+=-[/]{\}|:<>?,.;~";
const number = "1234567890";

  if (upperConfirm && lowerConfirm && numberConfirm && specialConfirm){
    var randomCharacter = function(){
      var characters = (upper + lower + special + number)[Math.floor(Math.random() * (upper.length + lower.length + special.length + number.length ))]
      return characters
      }
  } else if (upperConfirm && lowerConfirm && numberConfirm ){
    var randomCharacter = function(){
      var characters = (upper + lower + number)[Math.floor(Math.random() * (upper.length + lower.length + number.length ))]
      return characters
    }
  } else if (upperConfirm && lowerConfirm && specialConfirm ){
    var randomCharacter = function(){
      var characters = (upper + lower + special)[Math.floor(Math.random() * (upper.length + lower.length + special.length ))]
      return characters
    }
  } else if (specialConfirm && lowerConfirm && numberConfirm ){
    var randomCharacter = function(){
      var characters = (special + lower + number)[Math.floor(Math.random() * (special.length + lower.length + number.length ))]
      return characters
      }
  } else if (upperConfirm && specialConfirm && numberConfirm ){
    var randomCharacter = function(){
      var characters = (upper + special + number)[Math.floor(Math.random() * (upper.length + special.length + number.length ))]
      return characters
      }
  } else if (upperConfirm && lowerConfirm ){
    var randomCharacter = function(){
      var characters = (upper + lower)[Math.floor(Math.random() * (upper.length + lower.length ))]
      return characters
      } 
  } else if (upperConfirm && specialConfirm ){
    var randomCharacter = function(){
      var characters = (upper + special)[Math.floor(Math.random() * (upper.length  + special.length ))]
      return characters
      }
  } else if (lowerConfirm && specialConfirm ){
    var randomCharacter = function(){
      var characters = (lower + special)[Math.floor(Math.random() * (lower.length  + special.length ))]
      return characters
      }
  } else if (upperConfirm  && numberConfirm ){
    var randomCharacter = function(){
      var characters = (upper + number)[Math.floor(Math.random() * (upper.length + number.length ))]
      return characters
      }
  } else if (lowerConfirm && numberConfirm ){
    var randomCharacter = function(){
      var characters = (lower + number)[Math.floor(Math.random() * (lower.length + number.length ))]
      return characters
      }
  } else if (specialConfirm && numberConfirm ){
    var randomCharacter = function(){
      var characters = (special + number)[Math.floor(Math.random() * (special.length + number.length ))]
      return characters
      }     
  } else if (upperConfirm ){
    var randomCharacter = function(){
      var characters = (upper)[Math.floor(Math.random() * (upper.length))]
      return characters
      }
  } else if (lowerConfirm){
    var randomCharacter = function(){
      var characters = (lower)[Math.floor(Math.random() * ( lower.length))]
      return characters
      }
  } else if (numberConfirm){
      var randomCharacter = function(){
        var characters = (number)[Math.floor(Math.random() * (number.length ))]
        return characters
      }
  } else if (specialConfirm){
    var randomCharacter = function(){
      var characters = (special)[Math.floor(Math.random() * (special.length ))]
      return characters
      }
  }else {
    generatePassword()
  }
  
  return randomCharacter()
 
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
