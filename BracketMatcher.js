function BracketMatcher(str) { 
    let lenStr = str.length;
    let arrBrackets = [];
    for(let i = 0; i < lenStr; i++) {
        if(str[i] == "(") arrBrackets.push("(");
        if(str[i] == ")" && arrBrackets.length === 0) return 0; 
        if(str[i] == ")" && arrBrackets.length > 0) arrBrackets.pop() ;
       
    }
    if(arrBrackets.length === 0) return 1;
    return 0; 
  }
  BracketMatcher(readline());