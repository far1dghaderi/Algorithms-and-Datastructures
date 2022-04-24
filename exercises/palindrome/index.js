// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//* solution one => use array methods for reversing the string and then simply compare them
/*
function palindrome(str) {
  const reversedString = str.split("").reverse().join("");
  return reversedString === str;
}
*/

//* solution two => use for loop for reversing the string and then simply compare them
/*
function palindrome(str) {
  let reversedString = "";

  for (let char of str) {
    reversedString = char + reversedString;
    debugger;
  }
  return reversedString === str;
}
*/

//* solution three => use reduce method for reversing the string and then simply compare them
function palindrome(str) {
  let reversedString = str
    .split("")
    .reduce((reversed, char) => char + reversed);
  return str === reversedString;
}

module.exports = palindrome;
