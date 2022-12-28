// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// input: two strings, letters only? yes, capitilization matters? lowercase only

// output: true or false, magazine contains letters to be cut out for a ransom note, the ransom note cannot be written if the magazine lacks that letter

// magazine = "b", ransomNote = "a" => false
// magazine = "a", ransomNote = "a" => true
// magazine = "ab", ransomNote = "aa" => false
// magazine = "aab", ransomNote = "aa" => true

function canConstruct(ransomNote, magazine) {
  // reduce ransomNote into a charMap
  let ransomCharMap = ransomNote.split("").reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
  // reduce magazine into a charMap
  let magazineCharMap = magazine.split("").reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
  // loop through the kays in ransomCharMap
  for (let key in ransomCharMap) {
    // if any value is greater than the corresponding value in magazineCharMap return false
    if (!magazineCharMap[key] || ransomCharMap[key] > magazineCharMap[key])
      return false;
  }
  return true;
}

console.log(canConstruct("a", "b"), false);
console.log(canConstruct("a", "a"), true);
console.log(canConstruct("aa", "ab"), false);
console.log(canConstruct("aa", "aab"), true);
