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
 * @return {number}
 */

function measure(node, max) {
  if (!node) return 0;
  let leftHeight = measure(node.left, max);
  let rightHeight = measure(node.right, max);

  let currentDiameter = leftHeight + rightHeight;

  if (currentDiameter > max[0]) {
    max[0] = currentDiameter;
  }
  
  return Math.max(leftHeight, rightHeight) + 1;
}

var diameterOfBinaryTree = function(root) {
  let max = [0];
  measure(root, max);
  return max[0];
};
