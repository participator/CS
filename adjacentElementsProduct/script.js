function adjacentElementsProduct(inputArray) {
    const adjacentProducts = inputArray.map((value, index, array) => {
        const nextValue = array[index + 1];
        if (nextValue) {
            console.log(value * nextValue);
            return value * nextValue;
        }
        return Number.MIN_SAFE_INTEGER;
    });
    
    const maxProduct = adjacentProducts.reduce((cumm, curr) => {
        return cumm > curr ? cumm : curr;
    }, Number.MIN_SAFE_INTEGER);
    
    return maxProduct;
}