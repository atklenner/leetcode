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
 * @return {number[]}
 */

function postorder(node, arr) {
  if (!node) {
    return;
  }
  postorder(node.left, arr);
  postorder(node.right, arr);
  arr.push(node.val);
  return;
}
var postorderTraversal = function(root) {
  let arr = [];
  postorder(root, arr);
  return arr;
};
