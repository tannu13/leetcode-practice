export function intToRoman(num: number): string {
  const romanNumeralMap: { [key: number]: string } = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  const romanNumeralKeys = Object.keys(romanNumeralMap)
    .map((key) => parseInt(key))
    .sort((a, b) => b - a);

  let romanNumeral = "";

  for (let i = 0; i < romanNumeralKeys.length; i++) {
    const romanNumeralKey = romanNumeralKeys[i];
    const romanNumeralValue = romanNumeralMap[romanNumeralKey];

    while (num >= romanNumeralKey) {
      romanNumeral += romanNumeralValue;
      num -= romanNumeralKey;
    }
  }

  return romanNumeral;
}
