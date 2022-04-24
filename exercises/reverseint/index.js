// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//* solution one => convert the input number to string and simply reverse it,
//* and convert it back to number
function reverseInt(n) {
  let number = n.toString().split("").reverse();

  return parseInt(number.join("")) * Math.sign(n);
}

module.exports = reverseInt;
