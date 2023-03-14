/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let rightSum = nums.reduce((acc, cur) => acc + cur, 0);
  let leftSum = 0;
  for (let [idx, value] of nums.entries()) {
    rightSum -= value;
    if (leftSum === rightSum) {
      return idx;
    }
    leftSum += value;
  }
  return -1;
};
