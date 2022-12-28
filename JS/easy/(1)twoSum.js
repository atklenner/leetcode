/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // create a map from values in nums and their indexes
  let map = {};
  // loop through the array
  for (let i = 0; i < nums.length; i++) {
    // if the value map[target - num] exists
    // return the mapped index and the current index
    if (target - nums[i] in map) return [map[target - nums[i]], i];
    map[nums[i]] = i;
  }
};
