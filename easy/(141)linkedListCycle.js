/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let currentNode = head;
  let cache = [head];
  while (currentNode?.next) {
    if (cache.includes(currentNode.next)) return true;
    currentNode = currentNode.next;
    cache.push(currentNode);
  }
  return false;
};
