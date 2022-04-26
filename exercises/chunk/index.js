// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//* solution 1 => iterate through the input array and in each iteration, we add the current item
//* to the tempArray(this will hold our chunks temporary), then each time we'll check that does we reach to the current chunk
//* size, if so, we will add the chunk to the chunked array and otherwise, we'll check that does
//* we reach to the end of the array, if so, we'll do the same
// function chunk(array, size) {
//   let chunkedArray = [];
//   let counter = 1;
//   let tempArray = [];
//   for (const item of array) {
//     tempArray.push(item);
//     if (counter % size == 0) {
//       chunkedArray.push(tempArray);
//       tempArray = [];
//     } else if (array.length <= counter) {
//       chunkedArray.push(tempArray);
//     }
//     counter++;
//   }
//   return chunkedArray;
// }

//* solution 2 => use the slice method to create chunks and then simply add them to the chunkedArray
function chunk(array, size) {
  let current = 0;
  let chunkedArray = [];
  while (current < array.length) {
    let chunk = array.slice(current, current + size);
    if (chunk != []) chunkedArray.push(chunk);
    current += size;
  }
  return chunkedArray;
}

module.exports = chunk;
