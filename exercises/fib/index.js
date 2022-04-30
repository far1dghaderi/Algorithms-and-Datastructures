// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//* solution 1 => solving the problem with recursion
// function fib(n, fibArr = [0, 1]) {
//   if (fibArr.length < 3) fibArr = [0, 1];
//   if (fibArr.length - 1 == n) return fibArr[fibArr.length - 1];

//   let current = fibArr;
//   current.push(fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]);

//   return fib(n, current);
// }

function fib(n) {
  let fibArr = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibArr.push(fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]);
  }
  return fibArr[fibArr.length - 1];
}
module.exports = fib;
