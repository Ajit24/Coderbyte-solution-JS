function BracketCombinations(num) {

    function calculatePOssibilities (open, closed) {
        if (open === 0 && closed === 0)
            return 1;
        var res = 0;
        if (open > 0)
            res += calculatePOssibilities(open - 1, closed);
        if (closed > open)
            res += calculatePOssibilities(open, closed - 1);
        return res;
    }
    // code goes here  
    return calculatePOssibilities(num, num);
}

   
// keep this function call here 
BracketCombinations(readline());