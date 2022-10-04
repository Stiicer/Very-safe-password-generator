// Assignment Code
var generateBtn = document.querySelector("#generate");
var lettersU = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lettersL= []
var numericP=['0','1','2','3','4','5','6','7','8','9','10']
var specialC= "!#$%&()*+,-./:;<=>?@[]^_`{|}~"

for(let letter of lettersU){
  lettersL.push(letter.toLowerCase());
}
console.log(lettersU, lettersL);
console.log(specialC);

function generatePassword(){
    
    var form1= document.getElementById("user-input");
    form1.style.display = "block";
     

    var Upper= lettersU.length;
    var Lower= lettersL.length;
    var Special= specialC.length;
    var randomP = math.floor(math.random()*Upper);
console.log(randomP);

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
