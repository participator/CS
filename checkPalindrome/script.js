function checkPalindrome(inputString) {
    const length = inputString.length;
    
    for (var index=0; index < length; index++) {
        if (inputString[index] !== inputString.slice(length-1-index, length-index))
            return false;
    }
    
    return true;
}