// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//* solution one => solve the problem with recursion. in each iteration, we add white spaces to the start and
//* end of the string with this formula(totalRows - currentRow ). and for # sign, we just use this
//* formula(current row * 2 - 1), it will add two #'s in each iteration
/*
function pyramid(totalRows, currentRow = 1) {
  if (totalRows < currentRow) return;

  let row =
    " ".repeat(totalRows - currentRow) +
    "#".repeat(currentRow * 2 - 1) +
    " ".repeat(totalRows - currentRow);

  console.log(row);

  currentRow++;
  pyramid(totalRows, currentRow);
}
*/

/*
//* => solution two => this solution was like the previous one but instead of recursion, we used for loop;
function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = " ".repeat(n - i) + "#".repeat(i * 2 - 1) + " ".repeat(n - i);
    console.log(row);
  }
}
pyramid(3);
*/

// * solution three => we have input*2 columns in each row. so with this knowledge we simply use 2 for loops,
//*  first one one printing rows and second one for adding columons to the row. in second loop, we print
//* columns base on this formula=> first we print white spaces until we reach to the number of non-blank
//* columns in current row, when we reach to that, we print #s till we reach the maximum number of #s
//* in that row(columnsCount + blankSpaces), after that for the remaining columns we just simply print
//* blank values to the column
function pyramid(n) {
  for (let rowIndex = 1; rowIndex <= n; rowIndex++) {
    let row = "";
    let blankSpaceCount = n - rowIndex;
    let columnsCount = rowIndex * 2 - 1;
    for (let columnIndex = 1; columnIndex < n * 2; columnIndex++) {
      if (columnIndex <= blankSpaceCount) row += " ";
      else if (columnIndex <= columnsCount + blankSpaceCount) row += "#";
      else row += " ";
    }
    console.log(row);
  }
}
module.exports = pyramid;
