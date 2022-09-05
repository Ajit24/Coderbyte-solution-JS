function FindIntersection(strArr) { 

    // code goes here  
    
      let newArr = [];
    let elem1 = strArr[0].split(', ');
    let elem2 = strArr[1].split(', ');
    
  
    // code goes here  
    for(let i = 0; i < elem1.length; i++ ) {
      if (elem2.includes(elem1[i])) {
        newArr.push(elem1[i]);
      }
    }
  if (newArr.length === 0) {
    return false;
  } 
  else {
    return newArr.toString();
  }
  
  }
     
  // keep this function call here 
  console.log(FindIntersection(readline()));