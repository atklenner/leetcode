/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let neg = [];
  let pos = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      neg.push(nums[i] * nums[i]);
    } else {
      pos.push(nums[i] * nums[i]);
    }
  }
  // now how to merge the two...
  pos.reverse();
  let sorted = [];
  while(neg.length > 0 || pos.length > 0) {
    if (neg.length === 0) {
      sorted.push(pos.pop());
    } else if (pos.length === 0) {
      sorted.push(neg.pop());
    } else if (pos[pos.length - 1] < neg[neg.length - 1]) {
      sorted.push(pos.pop());
    } else {
      sorted.push(neg.pop());
    }
  }
  return sorted;
};
