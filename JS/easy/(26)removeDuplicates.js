/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // store the most recent unique value, the first value by default
  let currentUniqueVal = nums[0];
  // keep track of the number of unique values, it is 1 by default
  let uniqueValCount = 1;
  // loop from 1 to the end of nums
  for (let i = 1; i < nums.length; i++) {
    // check if the nums[i] is different from currentUniqueVal
    if (nums[i] !== currentUniqueVal) {
      // if it is, store that value in currentUniqueVal
      currentUniqueVal = nums[i];
      // change nums[uniqueValCount] to currentUniqueVal
      nums[uniqueValCount] = currentUniqueVal;
      // increment uniqueValCount by 1
      uniqueValCount++;
    }
  }
  // pop off the excess values in the nums array
  let numsLength = nums.length;
  for (let i = 0; i < numsLength - uniqueValCount; i++) {
    nums.pop();
  }
};
