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

function check(leftNode, rightNode) {
  // this is just checking if two trees are the same
  // but going different directions
  if (leftNode === null && rightNode === null) {
    return true;
  }
  if (leftNode?.val !== rightNode?.val) {
    return false;
  }

  let checkLeftRight = check(leftNode.left, rightNode.right);
  let checkRightLeft = check(leftNode.right, rightNode.left);
  
  return checkLeftRight && checkRightLeft;
}

var isSymmetric = function(root) {
  // basically need to traverse the left and right branch from the root
  // but for the right branch I should go right then left
  return check(root.left, root.right);
};
