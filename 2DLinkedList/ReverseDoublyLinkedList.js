// // Problem Statement: Given a doubly linked list of size
// // ‘N’ consisting of positive integers, your task is to reverse it and
// // return the head of the modified doubly linked list.

// Example 1:

// Input Format:

// DLL: 1 <-> 2 <-> 3 <-> 4

// Result: DLL: 4 <-> 3 <-> 2 <-> 1

// Explanation: The doubly linked list is reversed and its last node is returned at the new head pointer.

// Example 2:

// Input Format:

// DLL: 10 <-> 20 <-> 30

// Result: DLL: 30 <-> 20 <-> 10

// Explanation: In this case, the doubly linked list is reversed
//and its former tail is returned as its new head.

//Approach
// Algorithm / Intuition
// A brute-force approach involves replacing data in a doubly linked list. First, we traverse the list and store node data in a stack. Then, in a second pass, we assign elements from the stack to nodes, ensuring a reverse order replacement since stacks follow the Last-In-First-Out (LIFO) principle.

// Algorithm:
// Step 1: Initialization a temp pointer to the head of the doubly linked list and a stack data structure to store the values from the list.

// Step 2: Traverse the doubly linked list with the temp pointer and while traversing push the value at the current node temp onto the stack. Move the temp to the next node continuing until temp reaches null indicating the end of the list.

// Step 3: Reset the temp pointer back to the head of the list and in thissecond iteration pop the element from the stack,
//replace the data at the current node with the popped value from the top of the stack and move temp to the next node. Repeat this step until temp reaches null or the stack becomes empty.

class Node {
  constructor(data, next = null, back = null) {
    this.data = data;
    this.next = next;
    this.back = back;
  }
}

// Function to convert an array
// to a doubly linked list
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

// Function to reverse the double linked list
function reverseDLL(head) {
  // Function to reverse the data of a doubly linked list
  if (head === null || head.next === null) {
    // If the list is empty or has only one element, no need to reverse
    return head;
  }

  let stack = []; // Create a stack to store data temporarily
  let temp = head;
  // First iteration: Push data into the stack while traversing
  while (temp !== null) {
    stack.push(temp.data);
    temp = temp.next;
  }

  temp = head;

  // Second iteration: Pop data from the stack and update the list's nodes
  while (temp !== null) {
    temp.data = stack.pop();
    temp = temp.next;
  }

  return head;
}

//Fucntion with Optimal Solution
function reverseDLLOptimalSolution(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let prevNode = null;
  let tempNode = head;

  while (tempNode !== null) {
    prevNode = tempNode.back;
    tempNode.back = tempNode.next;
    tempNode.next = prevNode;
    tempNode = tempNode.back;
  }

  head = prevNode.back;
  return head;
}

// Function to print the elements
// of the doubly linked list
function print(head) {
  while (head !== null) {
    console.log(head.data + " ");
    // Move to the next node
    head = head.next;
  }
  console.log();
}

function main() {
  const arr = [12, 5, 6, 8, 4];
  // Convert the array to a doubly linked list
  let head = convertArrayToDoubleLinkList(arr);
  console.log("Doubly Linked List Initially:  ");
  print(head);

  console.log("Doubly Linked List After Reversing :");
  head = reverseDLL(head);
  print(head);

  console.log("Doubly Linked List After Reversing Optimal Solution:");
  head = reverseDLLOptimalSolution(head);
  print(head);
}

main();

// Time Complexity : O(2N) During the first traversal,
// each node’s value is pushed into the stack once,
// which requires O(N) time. Then, during the second iteration,
// the values are popped from the stack and used to update the nodes.
// Space Complexity : O(N) This is because we are using an external stack data structure.
// At the end of the first iteration, the stack will hold all N values of the doubly linked list
// therefore the space required
// for stack is directly proportional to the size of the input doubly linked list.

// For the Optimal Solution
//  Time Complexity is O(N)
//   Space Complexity is O(1)
