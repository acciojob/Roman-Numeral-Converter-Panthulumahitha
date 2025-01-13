function convertToRoman(num) {
    // Validate input range
    if (num < 0 || num > 100000) {
        return "Invalid input: Number out of range (0 <= x <= 100000)";
    }
    if (num === 0) {
        return "Roman numerals are not defined for zero.";
    }

    // Roman numeral symbols and their values
    const romanSymbols = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    let romanNumeral = "";

    // Convert number to Roman numeral
    for (let [symbol, value] of romanSymbols) {
        while (num >= value) {
            romanNumeral += symbol; // Append the Roman numeral
            num -= value;           // Reduce the number
        }
    }

    return romanNumeral; // Return the final Roman numeral
}

// Example Usage
console.log(convertToRoman(14));  // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII
console.log(convertToRoman(0));   // Output: Roman numerals are not defined for zero.
console.log(convertToRoman(100001)); // Output: Invalid input: Number out of range (0 <= x <= 100000)
