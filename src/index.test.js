const convertRomanToArabic = require("./index");
const { simpleTestCases, edgeCases  } = require("./utils");


describe("Roman to Arabic Tests", () => {
  // Testing baseCases
  test.each(simpleTestCases)(`Returns $output for $input`, ({ input, output }) => {
    expect(convertRomanToArabic(input)).toBe(output);
  });

  // Testing edgeCases
  test.each(edgeCases)(`Returns $output for $input`, ({ input, output }) => {
    expect(convertRomanToArabic(input)).toBe(output);
  });

  // Test for invalid input
  test("Returns 0 for invalid input", () => {
    expect(convertRomanToArabic("IIII")).toBe(0);
  });
});
