/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = -Infinity;
  let runningSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let sum = runningSum + num;
    runningSum = Math.max(num, sum);
    maxSum = Math.max(runningSum, maxSum);
  }

  return maxSum;
};
