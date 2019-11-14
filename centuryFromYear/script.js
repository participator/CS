window.onload = function() {
    console.log(`All test passed: ${runTest()}.`)
}

function centuryFromYear(year) {
    const century = year/100;
    
    return Math.floor(century) === century ? parseInt(century) : parseInt(century) + 1;
}


testYears = [{
    test: 1905,
    expected: 20
}, {
    test: 1700,
    expected: 17,
}, {
    test: 1988,
    expected: 20
}, {
    test: 2000,
    expected: 20
}, {
    test: 2001,
    expected: 21
}, {
    test: 200,
    expected: 2
}, {
    test: 374,
    expected: 4
}, {
    test: 45,
    expected: 1
}, {
    test: 8,
    expected: 1
}]

function runTest() {
    const results = testYears.filter(year => {
        return centuryFromYear(year.test) === year.expected;
    });

    return results.length === testYears.length;
}