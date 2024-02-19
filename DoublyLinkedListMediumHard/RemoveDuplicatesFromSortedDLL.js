class Node {
  constructor(data, next = null, back = null) {
    this.data = data;
    this.next = next;
    this.back = back;
  }
}

function convertArrayToDoubleLinkList(arr) {
  // Create the head node with
  // the first element of the array
  let head = new Node(arr[0]);
  let prev = head;

  for (let i = 1; i < arr.length; i++) {
    // Create a new node with data from
    // the array and set its 'back' pointer
    // to the previous node
    let temp = new Node(arr[i], null, prev);
    // Update the 'next' pointer of the
    // previous node to point to the new node
    prev.next = temp;
    // Move 'prev' to the newly created
    // node for the next iteration
    prev = temp;
  }

  // Return the head of the
  // doubly linked list
  return head;
}

function print(head) {
  let currentHead = head;
  while (currentHead !== null) {
    console.log(currentHead.data);
    currentHead = currentHead.next;
  }
}

function removeDuplicateFromDoublyLinkedList(head) {
  let temp = head;
  // Make sure that temp is not null and temp.next is not null
  while (temp !== null && temp.next !== null) {
    let nextNode = temp.next;

    // Also, keep moving if the  nextnode is not null and until nextnode data === temp data
    while (nextNode !== null && nextNode.data === temp.data) {
      nextNode = nextNode.next;
    }
    // Connect temp next to nextNode and nextNode back to temp  only if nextNode is not equal to null
    temp.next = nextNode;
    if (nextNode !== null) nextNode.back = temp;
    //then move temp to temp.next for another iteration
    temp = temp.next;
  }

  return head;
}

function main() {
  const arr = [1, 1, 1, 2, 3, 3, 4];
  // Convert the array to a doubly linked list
  let head = convertArrayToDoubleLinkList(arr);
  console.log("Doubly Linked List Initially:  ");
  print(head);

  let result = removeDuplicateFromDoublyLinkedList(head);
  console.log(" This is the printing the head after removing the duplicate ");
  print(result);
}

main();


// Time Complexity is O(N), Reason: Both Loop runs through the length of the Doubly linkedlist
//Space Complexity is O(1)
