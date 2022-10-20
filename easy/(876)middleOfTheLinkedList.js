// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// given the head of a list, contains the val and next attributes

// want to return the node at the start of the back half of the list

// [1, 2, 3, 4, 5] => node that has node.val = 3
// [1, 2, 3, 4, 5, 6] => node that has node.val = 4

function middleNode(head) {
  // find the length of the list
  let length = 1;
  // while loop until node.next is null
  let currentNode = head;
  while (currentNode.next) {
    currentNode = currentNode.next;
    // add 1 to a length counter
    length++;
  }
  let middleNode = head;
  // use a for loop to find the middle length / 2
  for (let i = 1; i <= length / 2; i++) {
    middleNode = middleNode.next;
  }
  return middleNode;
}
