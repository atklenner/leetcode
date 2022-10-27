/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // loop through list and store values into an array
  let currentNode = head;
  let values = [currentNode.val];
  while (currentNode.next) {
    currentNode = currentNode.next;
    values.push(currentNode.val);
  }
  // loop through half of the values array
  for (let i = 0; i < values.length / 2; i++) {
    // check if the first value is the same as the last, then the second and so on
    // if they are different then return false
    if (values[i] !== values[values.length - 1 - i]) return false;
  }
  // else return true
  return true;
};
