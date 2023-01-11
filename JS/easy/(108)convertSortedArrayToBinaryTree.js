/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function transform(arr) {
  if (arr.length === 0) {
    return null;
  }
  if (arr.length === 1) {
    return new TreeNode(arr[0], null, null);
  }

  let middle = Math.floor(arr.length / 2);
  return new TreeNode(arr[middle], transform(arr.slice(0, middle)), transform(arr.slice(middle + 1)))
}

var sortedArrayToBST = function(nums) {
  return transform(nums);
};
