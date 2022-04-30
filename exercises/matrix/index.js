// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let maxNumber = n * n;
  let matrixArray = [];
  for (let i = 0; i < n; i++) {
    matrixArray.push([]);
  }
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;
  let counter = 1;
  while (startCol <= endCol) {
    //fulfilling the upper rows
    for (let i = startCol; i <= endCol; i++) {
      matrixArray[startRow][i] = counter;
      counter++;
    }
    startRow++;
    //fulfilling the right columns
    for (let i = startRow; i <= endRow; i++) {
      matrixArray[i][endCol] = counter;
      counter++;
    }
    endCol--;

    //fulfilling the bottom rows
    for (let i = endCol; startCol <= i; i--) {
      matrixArray[endRow][i] = counter;
      counter++;
    }
    endRow--;

    //fulfilling the left columns
    for (let i = endRow; startRow <= i; i--) {
      matrixArray[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  return matrixArray;
}

module.exports = matrix;
