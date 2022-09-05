function ArrayChallenge(strArr) {
    let result = '';
    for (let index = 0; index < strArr[0].length; index++) {
        if (strArr[0][index] === '1' && strArr[0][index] === strArr[1][index]) return result += '1'
        else return result += '0'
    }

    return result;
}
console.log(ArrayChallenge(readline()));