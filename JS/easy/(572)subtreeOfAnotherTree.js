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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

function findSimilarNode(node1, node2) {
  if (!node1) return false;

  let checkLeft = findSimilarNode(node1.left, node2);
  if (checkLeft) {
    return checkLeft;
  }
  
  let checkRight = findSimilarNode(node1.right, node2);
  if (checkRight) {
    return checkRight;
  }

  if (node1.val === node2.val) {
    return compareTrees(node1, node2);
  }

  return false;
}

function compareTrees(node1, node2) {
  if (node1 === null && node2 === null) {
    return true;
  }
  if (node1?.val !== node2?.val) {
    return false;
  }
  
  let compareLeft = compareTrees(node1.left, node2.left);
  let compareRight = compareTrees(node1.right, node2.right);

  if (compareLeft && compareRight) {
    return true;
  } else {
    return false;
  }
}

var isSubtree = function(root, subRoot) {
  return findSimilarNode(root, subRoot);
};
