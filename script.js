function convertToRoman(num) {
    if (num < 1 || num > 100000) {
        return "Invalid Input: Please enter a number between 0 and 100000.";
    }

    // Roman numeral symbols
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

    // Convert the number to Roman numeral
    for (let [symbol, value] of romanSymbols) {
        while (num >= value) {
            romanNumeral += symbol;
            num -= value;
        }
    }

    return romanNumeral;
}

// Example inputs
console.log(convertToRoman(14));  // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII
console.log(convertToRoman(0));   // Output: Invalid Input
console.log(convertToRoman(100000)); // Output: (handled within upper limit)
