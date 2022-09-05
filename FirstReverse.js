// Have the function FirstReverse(str) take the str parameter being passed and 
// return the string in reversed order. 
// For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
// Examples
// Input: "coderbyte"
// Output: etybredoc
// Input: "I Love Code"
// Output: edoC evoL I
function FirstReverse(str) { 
    var temp = '';
    for (var i = 0; i<str.length; i++) {
        temp = str[i] + temp;
    }
    // code goes here  
    return temp; 
           
  }
     
  // keep this function call here 
  FirstReverse(readline());