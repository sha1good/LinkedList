// In the realm of data structures, it’s essential to grasp the intricacies of doubly linked lists.
//These data structures are characterized by their ability to efficiently navigate in both forward and backward directions. Before diving into the depths of doubly linked lists, it’s beneficial to recap our understanding of linked lists, and their precursor.

// Practice:
// Solve Problem
// code-studio
// Recap on Linked List

// Before exploring doubly linked lists, let’s refresh our knowledge of linked lists.
//Linked lists are linear data structures consisting of nodes, each containing data and a reference (or pointer) to the next node.
//This setup allows for dynamic memory allocation and efficient insertions and deletions.

// A significant characteristic of singly linked lists is their unidirectional nature, allowing traversal in only one direction: forward.
//Moving backward, such as going from node 1 to node 3, is not possible because each node in a singly linked list holds two pieces of information – the data (an integer value in this case) and a pointer that indicates the address of the next node. This structure enables efficient forward navigation, but the absence of a backward pointer restricts reverse traversal.

// Doubly Linked Lists,  as the name suggests, take the concept of 2-way traversal by introducing two pointers in each node.
//This enables seamless traversal in both directions, making them a valuable tool for various advanced data structure applications.

class Node {
  constructor(data, next = null, back = null) {
    this.data = data; //// Data stored in the node
    this.next = next; // Pointer to the next node in the list (forward direction)
    this.back = back; // Pointer to the previous node in the list (backward direction)
  }
}

let array = [3, 7, 9, 0, 2];

function convertArrayToDoubleLinkList(array) {
  let head = new Node(array[0]);

  let prev = head;

  for (let i = 1; i < array.length; i++) {
    let temp = new Node(array[i], null, prev);
    prev.next = temp;
    prev = temp;
  }

  return head;
}

let head = convertArrayToDoubleLinkList(array);

console.log("Remove Kth Element from the Node");
let k = 2;
function removeKthElementFromDoubleLinkedList(head, k) {
  if (head == null) {
    return null;
  }

  let temp = head;
  let count = 0;
  while (temp !== null) {
    count++;

    if (count === k) {
      break;
    }

    temp = temp.next;
  }

  let prev = temp.back;
  let front = temp.next;

  if (prev === null && front === null) {
    return null;
  } else if (prev === null) {
    // that means, we are asked to delete the head
    return deleteHeadFromLinkedList(head);
  } else if (front === null) {
    return deleteTailFromLinkedList(head);
  }

  prev.next = front;
  front.back = prev;

  temp.next = null;
  temp.back = null;

  return head;
}
head = removeKthElementFromDoubleLinkedList(head, k);

console.log("Remove Value Element from the Node");
function removeValueElementFromDoubleLinkedList(head) {
  let temp = head;

  let prev = temp.back;
  let front = temp.next;

  if (front === null) {
    prev.next = null;
    temp.back = null;
    return;
  }

  prev.next = front;
  front.back = prev;
  temp.next = null;
  temp.back = null;
  return head;
}
// This kind of question, you will not be  asked to remove the head
head = removeValueElementFromDoubleLinkedList(head.next);

let currentHead = head;
while (currentHead !== null) {
  console.log(currentHead.data);
  currentHead = currentHead.next;
}

//Delete Head from  a double linked list
console.log("========= Delete Head from a double Linked List ===========");

function deleteHeadFromLinkedList(head) {
  if (head === null || head.next === null) {
    return null;
  }
  let prev = head;
  head = head.next;
  head.back = null;
  prev.next = null;
  return head;
}

let deleteHead = deleteHeadFromLinkedList(head);
let currentHeads = deleteHead;

while (currentHeads !== null) {
  console.log(currentHeads.data);
  currentHeads = currentHeads.next;
}

//  Delete Tail from  a double linked list
console.log("========= Delete Tail from a double Linked List===========");

function deleteTailFromLinkedList(head) {
  if (head === null || head.next === null) {
    return null;
  }

  let tail = head; // a copy of the head from here
  while (tail.next !== null) {
    tail = tail.next;
  }

  let prev = tail.back;
  prev.next = null;
  tail.back = null;
  return head;
}

let deleteTail = deleteTailFromLinkedList(head);
let currentTail = deleteTail;

while (currentTail !== null) {
  console.log(currentTail.data);
  currentTail = currentTail.next;
}
