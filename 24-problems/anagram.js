// // Two strings are anagrams if same characters and frequency.
// function anagram(word, ana) {
//   if (word.length !== ana.length) return false;
//   let obj = {};

//   for (let char of word) { // caluculates the freq
//     obj[char] = (obj[char] || 0) + 1;
//   }

//   for (let char of ana) {
//     if (!obj[char]) return false; // check if char exists
//     obj[char]--; // reduce the freq
//   }
//   return true;
// }

// console.log(anagram("anagram", "nagaram"));
// console.log(anagram("something", "anything"));
// console.log(anagram("aab", "abb"));

// Group anagrams
// core idea: “Anagrams become identical when sorted”
// "eat" → "aet"
// "tea" → "aet"
// "ate" → "aet"
function groupAnagrams(angms) {
  const map = {};

  for (let word of angms) {
    let key = word.split("").sort().join("");

    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(word);
  }
  return Object.values(map);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// output [
//   ["eat","tea","ate"],
//   ["tan","nat"],
//   ["bat"]
// ]
