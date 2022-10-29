/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let min = 0;
  let max = nums.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let guess = nums[middle];
    if (guess === target) return middle;
    if (guess < target) min = middle + 1;
    if (guess > target) max = middle - 1;
  }
  return -1;
};
