function shapeArea(n) {
    const side = 1 + (n-1) * 2;
    const squareArea = side * side;
    const oneEmptyArea = calculateOneEmptyArea(n);
    
    return squareArea - oneEmptyArea * 4;
}

function calculateOneEmptyArea(n) {
    if ( n === 0 || n === 1) return 0;
    
    let oneEmptyArea = 0;
    for (var i=n-1; i > 0; i--) {
        oneEmptyArea = oneEmptyArea + i;
    }
    
    return oneEmptyArea;
}