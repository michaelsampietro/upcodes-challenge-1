// Invalid substrings reference:
// https://www.thevbprogrammer.com/Ch08/08-10-RomanNumerals.htm#:~:text=Therefore%2C%20the%20following%20pairs%20of,%2C%20IM%2C%20XD%2C%20XM.
const invalidSubstrings = [
  "IIII",
  "XXXX",
  "CCCC",
  "MMMM",
  "VX",
  "VL",
  "VC",
  "VD",
  "VM",
  "LC",
  "LD",
  "LM",
  "DM",
  "CMC",
  "CDC",
  "XCX",
  "XLX",
  "IXX",
  "IXV",
  "XCC",
  "XCL",
  "CMM",
  "CMD",
  "IIV",
  "IIX",
  "VIV",
  "VIX",
  "XXL",
  "LXL",
  "XXC",
  "LXC",
  "CCD",
  "CCM",
  "DCD",
  "DCM",
];

// Test cases
const simpleTestCases = [
  {
    input: "I",
    output: 1,
  },
  {
    input: "V",
    output: 5,
  },
  {
    input: "X",
    output: 10,
  },
  {
    input: "L",
    output: 50,
  },
  {
    input: "C",
    output: 100,
  },
  {
    input: "D",
    output: 500,
  },
  {
    input: "M",
    output: 1000,
  },
];

const edgeCases = [
  {
    input: "IV",
    output: 4,
  },
  {
    input: "IX",
    output: 9,
  },
  {
    input: "XL",
    output: 40,
  },
  {
    input: "XC",
    output: 90,
  },
  {
    input: "CD",
    output: 400,
  },
  {
    input: "CM",
    output: 900,
  },
];

module.exports = {
  simpleTestCases,
  edgeCases,
  invalidSubstrings,
};