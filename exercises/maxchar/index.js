// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//* solution 1 => first of all we'll convert the string to a Set, to remove duplicates
//* then we use that array of unique chars for iterating through the input string and
//* counting each character in that string and compare it with others

function maxChar(str) {
  const usedCharsArray = Array.from(new Set(str));
  let mostUsedChar = "";
  let mostUsedCharCount = 0;
  let charsArray = str.split("");
  usedCharsArray.forEach((char) => {
    let currentCharCount = charsArray.filter((cr) => cr == char).length;
    if (mostUsedCharCount < currentCharCount) {
      mostUsedChar = char;
      mostUsedCharCount = currentCharCount;
    }
  });
  return mostUsedChar;
}

module.exports = maxChar;
