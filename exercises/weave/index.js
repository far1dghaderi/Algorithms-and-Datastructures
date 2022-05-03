// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require("./queue");

function weave(sourceOne, sourceTwo) {
  let dataRemained = true;
  let thirdQueue = new Queue();
  while (dataRemained) {
    let src1 = sourceOne.remove();
    let src2 = sourceTwo.remove();
    if (src1 || src1 === 0) {
      thirdQueue.add(src1);
      src1 === 0 ? true : src1;
    }
    if (src2 || src2 === 0) {
      thirdQueue.add(src2);
      src2 === 0 ? true : src2;
    }
    dataRemained = src1 || src2;
  }
  return thirdQueue;
}

module.exports = weave;
