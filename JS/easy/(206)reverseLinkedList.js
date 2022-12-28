/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function reverse(node, lastNode = null) {
  if (!node) {
    return lastNode;
  }

  let next = node.next;
  node.next = lastNode;

  return reverse(next, node);
}

var reverseList = function (head) {
  return reverse(head);
};
