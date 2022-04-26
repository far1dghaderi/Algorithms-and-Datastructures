// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// * solution 1 => transfer strings to chars object and then compare them one by one
//#region
function anagrams(stringA, stringB) {
  let strObj1 = convertStringToObj(stringA.replace(/[^\w]/g, "").toLowerCase());
  let strObj2 = convertStringToObj(stringB.replace(/[^\w]/g, "").toLowerCase());
  let isAnagram = Object.keys(strObj1).every(
    (key) => strObj1[key] == strObj2[key]
  );
  if (isAnagram) {
    isAnagram = Object.keys(strObj2).every(
      (key) => strObj2[key] == strObj1[key]
    );
  }
  return isAnagram;
}
//this function is just a helper for converting string to chars object
function convertStringToObj(text) {
  let charsObject = {};
  text.split("").forEach((char) => {
    charsObject[char] = charsObject[char]
      ? ++charsObject[char]
      : (charsObject[char] = 1);
  });
  return charsObject;
}
//#endregion
module.exports = anagrams;
