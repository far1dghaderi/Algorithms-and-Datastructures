// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//* solution 1 => Just simply use the reduce method and in each iteration, convert the first letter of each word to upper case
//* and concat it with the previous one
function capitalize(str) {
  return str.split(" ").reduce((fullText, currentWord) => {
    return toUpper(fullText) + " " + toUpper(currentWord);
  });
}

function toUpper(word) {
  return word[0].toUpperCase() + word.slice(1, word.length);
}
console.log(capitalize("farid is god"));
module.exports = capitalize;
