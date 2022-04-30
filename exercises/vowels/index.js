// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//* solution 1 => we iterate through the string and we test each character with our regex pattern
//* if it passed the test, we add 1 to our vowelsCount
function vowels(str) {
  let vowelsCount = 0;
  str.split("").forEach((char) => {
    if (RegExp(/a+|e+|i+|o|u/).test(char.toLowerCase())) vowelsCount++;
  });
  return vowelsCount;
}

module.exports = vowels;
