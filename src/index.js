const { invalidSubstrings } = require("./utils");
const inputs = require('../inputs');

/**
 * Converts a roman number to arabic
 * @param {string} parsedNumber
 * @returns the converted number in arabic
 */
function convertRomanToArabic(romanNumber) {
  const uppercaseNumber = romanNumber.toUpperCase();

  // Testing for invalid input
  if (
    invalidSubstrings.some((invalidString) => uppercaseNumber.includes(invalidString)) ||
    !uppercaseNumber ||
    !uppercaseNumber.length
  ) {
    console.log(`Invalid input ${uppercaseNumber}`);
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < uppercaseNumber.length; i++) {
    switch (uppercaseNumber.charAt(i)) {
      case "I":
        sum++;
        break;
      case "V":
        if (sum == 0 || uppercaseNumber.charAt(i - 1) != "I") {
          sum += 5; // If 'V' is the first character or the previous character is not 'I', add 5
        } else {
          sum += 3; // If the previous character is 'I', add 3, since 1 is already added from the previous case
        }
        break;
      case "X":
        if (sum == 0 || uppercaseNumber.charAt(i - 1) != "I") {
          sum += 10; // If 'X' is the first character or the previous character is not 'I', add 10
        } else {
          sum += 8; // If the previous character is 'I', add 8, since 1 is already added from the 'I' case
        }
        break;
      case "L":
        if (sum == 0 || uppercaseNumber.charAt(i - 1) != "X") {
          sum += 50; // If 'L' is the first character or the previous character is not 'X', add 50
        } else {
          sum += 30; // If the previous character is 'X', add 30, since 10 is already added from the 'X' case
        }
        break;
      case "C":
        if (sum == 0 || uppercaseNumber.charAt(i - 1) != "X") {
          sum += 100; // If 'C' is the first character or the previous character is not 'X', add 100
        } else {
          sum += 80; // If the previous character is 'X', add 80, since 10 is already added from the 'X' case
        }
        break;
      case "D":
        if (sum == 0 || uppercaseNumber.charAt(i - 1) != "C") {
          sum += 500; // If 'D' is the first character or the previous character is not 'C', add 500
        } else {
          sum += 300; // If the previous character is 'C', add 300, since 100 is already added from the 'C' case
        }
        break;
      case "M":
        if (sum == 0 || uppercaseNumber.charAt(i - 1) != "C") {
          sum += 1000; // If 'M' is the first character or the previous character is not 'C', add 1000
        } else {
          sum += 800; // If the previous character is 'C', add 800, since 100 is already added from the 'C' case
        }
        break;
      default:
        sum += 0;
    }
  }
  return sum;
}

inputs.forEach((input) => {
  console.log(input, convertRomanToArabic(input));
});

module.exports = convertRomanToArabic;
