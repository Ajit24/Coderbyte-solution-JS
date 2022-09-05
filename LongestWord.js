function LongestWord(sen) { 
    sen=sen.replace(/[^a-zA-Z ]/ig,'')
    words = sen.split(" ")
    LongestWord = words[0]
    for (i = 0; i<words.length; i ++) {
        if (words[i].length > LongestWord.length) {
          LongestWord = words[i]	
        }
    }
   return LongestWord
  }
  
  
   
     
  // keep this function call here 
  LongestWord(readline());