function MinWindowSubstring(arr) {
    var str1 = arr[0], str2 = arr[1], min = Infinity, output;
    
    for (var i = 0; i < str1.length; i++) {
      for (var j = i+1; j <= str1.length; j++) {
        var slice = str1.slice(i, j);   
        if (slice.length < min && scramble(slice, str2)) {
          output = slice;
          min = slice.length;
        }
      }
    }
    
    return output;
  }  
  
  function scramble(str1, str2) {
    function obj(str) {
      return str. split("").reduce(function(prev, curr) {
        prev[curr] ? prev[curr]++ : prev[curr] = 1;
        return prev;
      }, {});
    }
    
    var charCount1 = obj(str1), charCount2 = obj(str2);
    
    return Object.keys(charCount2).reduce(function(prev, curr) {
      return Math.min(prev, charCount1[curr]/charCount2[curr] || 0);
    }, Infinity) >= 1;
  }
  
  
  // keep this function call here 
  MinWindowSubstring(readline());