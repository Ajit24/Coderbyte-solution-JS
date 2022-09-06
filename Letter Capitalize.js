function LetterCapitalize (str) {
    str = str.split(' ');
  
    for (var i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
  
    return str.join(' ');
  }
  
  // Using Chaining/Map
  
  function LetterCapitalize (str) {
    return str.split(' ').map(function (word, i) {
      return word[0].toUpperCase() + word.substr(1);
    }).join(' ');
  }