export function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  const rows: string[] = [];
  for (let i = 0; i < Math.min(numRows, s.length); i++) {
    rows.push("");
  }
  let currentRow = 0;
  let goingDown = false;
  for (const c of s) {
    rows[currentRow] += c;
    if (currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown;
    currentRow += goingDown ? 1 : -1;
  }
  return rows.join("");
}

/**
 // const out = "";

  // create an array of strings with length equal to numRows
  const arr: string[] = new Array(numRows).fill("");
  let goingDown = false;
  for (let i = 0; i < s.length; i++) {
    if (i % numRows === 0 || ((i + 1) % numRows === 0 && !goingDown)) {
      goingDown = !goingDown;
    }
    let arrIndexToAppendChar = i % numRows;
    if (!goingDown) {
      arrIndexToAppendChar = numRows - 1 - arrIndexToAppendChar;
    }
    arr[arrIndexToAppendChar] = arr[arrIndexToAppendChar] + s[i];
    console.log(i, arr, s[i], arrIndexToAppendChar);
  }
 */
