/*  
                
    // Input/Outputs
    I: 1  O: 1
    I: 2  O: 2
    I: 3  O: 3
    
    
    // Diagram
    
    // Input: 3
                    3
            2               1
        1       0       0
    
    // Input: 4
                            4
                3                           2
        2               1           1               0
    1       0       0           0
*/

// Pseudocode

// Code
function climbingStairs(n) {
    let result=0;
    const hash = {};
    
    function reduce(input) {
        if (hash[input] !== undefined) {
            console.log('input', input, 'hash[input]', hash[input]);
            return hash[input];
        }
        
        if (input <= 0 || input === 1) {
            return 1;
        }
        
        result = reduce(input - 2) + reduce(input - 1);
        hash[input] = result;
        
        return result;
    }
    
    return reduce(n);
}
