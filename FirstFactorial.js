function FirstFactorial(number) {
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }
     
  // keep this function call here 
  FirstFactorial(readline());