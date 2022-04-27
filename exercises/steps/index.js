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
// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     let step = "#";

//     for (let j = 2; j <= i; j++) {
//       step += "#";
//     }
//     step += " ".repeat(n - i);
//     console.log(step);
//   }
// }

//* solution 2 => solve the problem with a recursive solution
function steps(totalSteps, currentStep = 1) {
  if (totalSteps < currentStep) return;
  let step = "#".repeat(currentStep);
  step += " ".repeat(totalSteps - currentStep);
  console.log(step);
  steps(totalSteps, (currentStep += 1));
}
module.exports = steps;
