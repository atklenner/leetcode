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

function traverse(node) {
  // base cases
  // node doesn't exist
  if (!node) {
    return 0;
  }

  // recurse
  let left = traverse(node.left);
  let right = traverse(node.right);

  // post
  if (left >= right) {
    return 1 + left;
  }
  return 1 + right;
}

var maxDepth = function (root) {
  return traverse(root);
};
