// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//* solution 1 => the only things that this problem needs are two for loops, the rest is simple
function steps(n) {
  for (let i = 1; i <= n; i++) {
    let step = "#";

    for (let j = 2; j <= i; j++) {
      step += "#";
    }
    step += " ".repeat(n - i);
    console.log(step);
  }
}
steps(4);

module.exports = steps;
