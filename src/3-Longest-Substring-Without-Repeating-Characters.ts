// solve using map and sliding window
export function lengthOfLongestSubstring(s: string): number {
  let res = 0; // Variable to store the length of the longest substring
  const map = new Map(); // Map to track the most recent occurrence of each character
  let left = 0; // Left pointer to track the start of the current substring

  for (let right = 0; right < s.length; right++) {
    // Right pointer to iterate through the string
    const char = s[right]; // Get the current character

    if (map.has(char)) {
      // If the character already exists in the map (i.e., a duplicate character is found)
      left = Math.max(map.get(char) + 1, left); // Update the left pointer to skip to the next position after the last occurrence of the character
    }

    map.set(char, right); // Update the map with the most recent occurrence of the character
    res = Math.max(res, right - left + 1); // Calculate the length of the current substring and update the maximum length
  }
  return res; // Return the length of the longest substring
}
