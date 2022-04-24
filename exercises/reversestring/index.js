// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//* #region solution 1
//convert it to an array, then reverse it easily :D
/*

function reverse(str) {
    const charsArray = Array.from(str).reverse();
    return charsArray.join("");
}
*/

//* solution 2
// get the length of the string, then reverse it with a for loop
function reverse(str) {
  let reversedString = "";
  for (let i = str.length - 1; 0 <= i; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

module.exports = reverse;
