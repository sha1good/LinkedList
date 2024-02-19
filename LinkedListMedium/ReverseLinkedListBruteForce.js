// Algorithm / Intuition
// Approach 1 : Brute Force
// A straightforward approach to reversing a singly linked list requires an additional data structure to temporarily store the values. We can use a stack for this. By pushing each node onto the stack as we move through the list, we effectively reverse the order of the nodes. Once all the nodes are stored in the stack, we rebuild the reversed linked list by popping nodes from the stack and assigning them to the nodes. The result is a new linked list with the elements in the opposite order of the original list.

// Algorithm:
// Step 1: Create an empty stack. This stack will be used to temporarily store the nodes from the original linked list as we traverse it.

// Step 2: Traverse the linked list using a temporary variable `temp` till it reaches null. At each node, push the value at the current node onto the stack.

// Step 3: Set variable `temp` back to the head of the linked list. While the stack is not empty, set the value at the temp node to the value at the top of the stack. Pop the stack and move temp to the next node till it reaches null.

// Step 4: Return the head as the new head of the reversed linked list.

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function reverseLinkedList(head) {
  // Create a temporary pointer
  // to traverse the linked list
  let temp = head;

  // Create a stack to temporarily
  // store the data values
  let stack = [];

  // Step 1: Push the values of the
  // linked list onto the stack
  while (temp !== null) {
    // Push the current node's
    // data onto the stack
    stack.push(temp.data);

    // Move to the next node
    // in the linked list
    temp = temp.next;
  }

  // Reset the temporary pointer to
  // the head of the linked list
  temp = head;
  // Step 2: Pop values from the stack
  // and update the linked list
  while (temp !== null) {
    temp.data = stack.pop();

    temp = temp.next;
  }
  // Return the new head of
  // the reversed linked list
  return head;
}

function print(head) {
  let temp = head;
  while (temp !== null) {
    console.log(temp.data + " ");
    temp = temp.next;
  }
  console.log();
}

function main() {
  // Create a linked list with values 1, 3, 2, and 4
  let head = new Node(1);
  head.next = new Node(3);
  head.next.next = new Node(2);
  head.next.next.next = new Node(4);
  head = reverseLinkedList(head);
  print(head);
}

main();

// Time Complexity: O(2N) This is because we traverse the linked list twice: once to push the values onto the stack, 
// and once to pop the values and update the linked list. Both traversals take O(N) time, hence time complexity  O(2N) ~ O(N).

// Space Complexity: O(N) We use a stack to store the values of the linked list, and in the worst case, the stack will have all N values,  
// ie. storing the complete linked list. 



