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

function preorder(node, arr) {
  if (!node) {
    return;
  }
  arr.push(node.val);
  preorder(node.left, arr);
  preorder(node.right, arr);
  return;
}
var preorderTraversal = function(root) {
  let arr = [];
  preorder(root, arr);
  return arr;
};
