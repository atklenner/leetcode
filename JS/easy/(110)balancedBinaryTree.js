/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function check(node) {
  if (!node) return 0;
  let leftHeight = check(node.left);
  let rightHeight = check(node.right);
  if (leftHeight === -1 || rightHeight === -1) {
    return -1;
  }
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }
  return Math.max(leftHeight, rightHeight) + 1;
}

var isBalanced = function(root) {
  return check(root) >= 0;
};
