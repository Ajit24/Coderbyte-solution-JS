function ArrayAdditionI (arr) {
    var arr = arr.sort(function (a, b) { return a - b; });
    var largest = arr.pop();
    var result = false;
  
    var onePerm = function (sum, i) {
      sum = sum || 0;
      i = i || 0;
  
      if (sum === largest) {
        result = true;
        return;
      }
      for (; i < arr.length; i++) {
        sum += arr[i];
        onePerm(sum, i + 1);
        sum -= arr[i];
      }
    };
  
    onePerm();
    return result;
  }