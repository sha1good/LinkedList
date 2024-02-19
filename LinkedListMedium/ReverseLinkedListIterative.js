// Algorithm / Intuition
// Approach 2: Reverse Links in place (Iterative)

// The previous approach uses O(N) addition space which can be avoided by interchanging the connecting links of the nodes of the linked list in place.

// The main idea is to flip the order of connections in the linked list, which changes the direction of the arrows. When this happens, the last element becomes the new first element of the list. This in-place reversal allows us to efficiently transform the original list without using extra space.

// Algorithm:

// Step 1: Initialise a ‘temp’ pointer at the head of the linked list. This pointer will be used to traverse the linked list. And initialize the pointer ‘prev’ to ‘NULL’ to keep track of the previous node. This will be used to reverse the direction of the ‘next’ pointers.

// Step 2: Traverse the entire linked list by moving through each node using the ‘temp’ pointer until it reaches the end (marked as ‘NULL’).

// At each iteration within the traversal,

// Save the reference to the next node that ‘temp’ is pointing to in a variable called ‘front’. This helps retain the link to the subsequent node before altering the ‘next’ pointer.

// Reverse the direction of the ‘next’ pointer of the current node (pointed to by ‘temp’) to point to the ‘prev’ node. This effectively reversed the direction of the linked list, making the current node point to the previous node.

// Move the ‘prev’ pointer to the current node. This sets up the ‘prev’ pointer for the next iteration of the loop.
// Move the ‘temp’ pointer to the ‘front’ node. This advances the traversal to the next node in the original order.

// In summary:

// Step 3: Keep traversing through the linked list using the ‘temp’ pointer until it reaches the end, thereby reversing the entire list. Once the ‘temp’ pointer reaches the end, return the new head of the reversed linked list, which is now indicated by the ‘prev’ pointer. This ‘prev’ pointer becomes the first node in the newly reversed list.

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Function to reverse a linked list
// using the 3-pointer approach
function reverseLinkedList(head) {
  // Initialize pointer 'temp' at
  // head of the linked list
  let temp = head;

  // Initialize a pointer 'prev' to null
  // representing the previous node
  // (initially none)
  let prev = null;

  // Traversing the list, continue until
  // 'temp' reaches the end (null)
  while (temp !== null) {
    // Store the next node in
    // 'front' to preserve the reference
    let front = temp.next;
    temp.next = prev;
    // Move 'prev' to the current node,
    // preparing it for the next iteration
    prev = temp;

    // Move 'temp' to the 'front' node
    // (the next node), advancing traversal
    temp = front;
  }

  // Return the new head of
  // the reversed linked list
  return prev;
}

// Function to print the linked list
function printLinkedList(head) {
  let temp = head;
  while (temp !== null) {
    process.stdout.write(temp.data + " ");
    temp = temp.next;
  }
  console.log();
}

// Create a linked list with
// values 1, 3, 2, and 4
const head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(2);
head.next.next.next = new Node(4);

// Print the original linked list
process.stdout.write("Original Linked List: ");
printLinkedList(head);

// Reverse the linked list
reverseLinkedList(head);

// Print the reversed linked list
process.stdout.write("Reversed Linked List: ");
printLinkedList(head);


// Time Complexity: O(N) The code traverses the entire linked list once,
//  where ‘n’ is the number of nodes in the list. This traversal has a linear time complexity, O(n).

// Space Complexity: O(1) The code uses only a constant amount of additional space, 
// regardless of the linked list’s length. This is achieved by using three pointers (prev, temp and front) 
// to reverse the list without any 
// significant extra memory usage, resulting in constant space complexity, O(1).