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
var middleNode = function (head) {
  let walker = head;
  let runner = head;
  while (runner && runner.next && runner.next.next) {
    walker = walker.next;
    runner = runner.next.next;
  }
  if (runner.next) return walker.next;
  return walker;
};
