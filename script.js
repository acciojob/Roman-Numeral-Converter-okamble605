function convertToRoman(num) {
    // Define the Roman numeral symbols and their values
    const romanSymbols = [
        ['M', 1000],
        ['D', 500],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1]
    ];

    let result = '';

    // Iterate over the Roman symbols from largest to smallest
    for (let i = 0; i < romanSymbols.length; i++) {
        // Check how many times the current symbol can fit into the number
        while (num >= romanSymbols[i][1]) {
            result += romanSymbols[i][0]; // Append the symbol to the result
            num -= romanSymbols[i][1]; // Subtract the value from the number
        }
    }

    return result; // Return the final Roman numeral string
}

// Example usage:
console.log(convertToRoman(14));  // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII
