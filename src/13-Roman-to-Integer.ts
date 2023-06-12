/**
 * Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
 */
export function romanToInt(s: string): number {
  const map = new Map([
    // Create a mapping of Roman numerals to their corresponding integer values
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let res = 0; // Variable to store the result

  for (let i = 0; i < s.length; i++) {
    // Loop through each character in the input string
    const curr = map.get(s[i])!; // Get the integer value corresponding to the current Roman numeral
    const next = map.get(s[i + 1]) || 0; // Get the integer value corresponding to the next Roman numeral, or 0 if there is no next numeral

    if (curr < next) {
      // If the current numeral is smaller than the next numeral, it represents a subtraction
      res += next - curr; // Subtract the current value from the next value and add it to the result
      i++; // Skip the next numeral since it has already been processed
    } else {
      // Otherwise, the current numeral represents an addition
      res += curr; // Add the current value to the result
    }
  }

  return res; // Return the final result
}
