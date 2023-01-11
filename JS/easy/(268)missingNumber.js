/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  // I know the length of nums and what values it will contain
  // I could loop through nums and check off ever value I see
  // the last value will be the one missing
  // at least I wouldn't have to sort it
  let obj = {};
  for (let i = 0; i <= nums.length; i++) {
    obj[i] = true;
  }
  for (let value of nums) {
    delete obj[value];
  }
  for (let last in obj) {
    return last;
  }
};
