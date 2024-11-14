function convertToRoman(num) {
  // Array of roman numeral mappings in descending order
  const obj = [
    ['M', 1000], 
    ['D', 500], 
    ['C', 100], 
    ['L', 50], 
    ['X', 10], 
    ['V', 5], 
    ['I', 1]
  ];

  let result = '';  // Result string to hold the roman numeral

  // Loop through each symbol in the array
  for (let i = 0; i < obj.length; i++) {
    // While the number is greater than or equal to the current value
    while (num >= obj[i][1]) {
      result += obj[i][0];  // Add the symbol to the result
      num -= obj[i][1];  // Subtract the value from the number
    }
  }

  return result;  // Return the final roman numeral
}

// Testing the function
console.log(convertToRoman(14));  // Output: XIV
console.log(convertToRoman(798));  // Output: DCCXCVIII
console.log(convertToRoman(36));   // Output: XXXVI
