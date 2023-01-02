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
 * @return {TreeNode}
 */

function invert(node) {
  if (!node) {
    return;
  }

  let temp = node.left;
  node.left = node.right;
  node.right = temp;

  invert(node.left);
  invert(node.right);
}

var invertTree = function (root) {
  // do a pre-order traversal
  // at each node flip the left and the right
  // then recurse the flipping function to the left and right node
  invert(root);
  return root;
};
