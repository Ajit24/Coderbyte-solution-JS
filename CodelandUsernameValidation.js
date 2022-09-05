function CodelandUsernameValidation(str) { 

    if (str.length < 4 || str.length > 25) return false;
    if (str.charAt(str.length - 1) === '_') return false
    if (!startsWithLetter(str.charAt(0))) return false;
  
    for (const letter of str) {
      if (!isAlphaNumericOrUnderscore(letter)) return false;
    }
  
    return true; 
  
  }
  
  function startsWithLetter(char) {
    const letter = /^[a-zA-Z]+$/;
    return char.match(letter) ? true : false;
  }
  
  function isAlphaNumericOrUnderscore(char) {
    const letterNumber = /^[0-9a-zA-Z]+$/;
    return (char.match(letterNumber) || char === '_') ? true : false; 
  }
     
  // keep this function call here 
  console.log(CodelandUsernameValidation(readline()));