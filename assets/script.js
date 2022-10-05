// Assignment Code
var generateBtn = document.querySelector("#generate");
var lettersU = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lettersL= []
var numericP=['0','1','2','3','4','5','6','7','8','9']
var specialC= ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]







for(let letter of lettersU){
  lettersL.push(letter.toLowerCase());
}


console.log(lettersU, lettersL);
console.log(specialC);

function generatePassword(){
    let finalpass = "";
    let randomString = [];
    let psL = prompt("Enter how long your password will be 8-128 characters");

    let Upper = confirm("Would you like uppercase letters in your password");
    if(Upper){
    randomString = randomString +lettersU;
    }
    console.log(randomString);
    let Lower = confirm("Would you like lowercase letters in your password");
    if(Lower){
        randomString = randomString +lettersL;
        }
    console.log(randomString);
    
    let Numbers = confirm("Would you like numbers in your password");
    if(Numbers){
        randomString = randomString +numericP;
        }
    console.log(randomString);
    let Special = confirm("Would you like special characters in your password");
    if(Special){
        randomString = randomString +specialC;
        }
    console.log(randomString);
  
   
    for(var i=0; i< psL; i++){
    let pass = Math.floor(Math.random()*randomString.length);
    let password = randomString[pass];
    
    finalpass = finalpass +password;
    console.log(finalpass);
}
    return finalpass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
