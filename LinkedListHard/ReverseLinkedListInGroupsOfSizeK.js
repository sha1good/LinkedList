// // // Problem Statement: Given the head of a singly linked list of `n` nodes and an integer `k`,
// // //where k is less than or equal to `n`.
// // //Your task is to reverse the order of each group of `k` consecutive nodes, if `n` is not divisible by `k`,
// // //then the last group of remaining nodes should remain unchanged.

// // Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// // k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// // You may not alter the values in the list's nodes, only nodes themselves may be changed.

// // Example 1:

// // Input: head = [1,2,3,4,5], k = 2
// // Output: [2,1,4,3,5]
// // Example 2:

// // Input: head = [1,2,3,4,5], k = 3
// // Output: [3,2,1,4,5]

// // Constraints:

// // The number of nodes in the list is n.
// // 1 <= k <= n <= 5000
// // 0 <= Node.val <= 1000

// // Follow-up: Can you solve the problem in O(1) extra memory space?

// Approach:
// The approach simplifies reversing linked list nodes by breaking the list into segments of K nodes and reversing each segment individually. Starting from the head, the algorithm traverses the list to identify segments of K nodes. Upon finding a segment, it reverses it, returning the modified list. If a segment has less than K nodes left (ie. remaining nodes at the end), they are left unaltered.

// To implement this (complex) algorithm we can break down the process into three parts:

// `reverseLinkedList`: This function takes the head of a segment as input and reverses the linked list formed by that segment. It operates by utilizing the classic iterative 3-pointer method to reverse the direction of pointers within the segment. Read about this algorithm in detail here Reverse Linked List.

// `getKthNode`: The purpose of this function is to identify the end of a segment of K nodes in the linked list. Given a starting node, it traverses K nodes in the list and returns the Kth node, allowing the segmentation of the list into smaller parts for reversal.

// `kReverse`: The main function orchestrates the reversal process. It iterates through the linked list and identifies segments of K nodes using getKthNode. For each identified segment, it utilizes reverseLinkedList to reverse the nodes within that segment. This iterative approach efficiently reverses the linked list nodes in groups of K.

// Algorithm:
// Step 1: Initialise a pointer `temp` to the head of the linked list. Using `temp`, traverse to the Kth Node iteratively.

// Step 2: On reaching the Kth Node, preserve the Kth Node’s next node as `nextNode` and set the Kth Node’s next pointer to `null`. This effectively breaks the linked list in a smaller list of size K that can be reversed and attached back.

// Step 3: Treat this segment from `temp` to Kth Node as an individual linked list and reverse it. This can be done via the help of a helper function `reverseLinkedList` which has been discussed in detail in this article Reverse Linked List.

// Step 4: The reversed linked list segment returns a modified list with `temp` now at its tail  and the `KthNode` pointing to its head. Update the `temp`s `next` pointer to `nextNode`.

// If we are at the first segment of K nodes, update the head to `Kth Node`.

// Step 5: Continue this reversal for further groups. If a segment has fewer than K Nodes, leave them unmodified and return the new head. Use the prevLast pointer to maintain the link between the end of the previous reversed segment and the current segment.
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
  while (temp !== null) {
    // Store the next node in
    // 'front' to preserve the reference
    let front = temp.next;
    // Reverse direction of current node's
    // 'next' pointer to point to 'prev'
    temp.next = prev;
    // Move 'prev' to the current node,
    // preparing it for the next iteration
    prev = temp;
    // Move 'temp' to the 'front' node
    // (the next node), advancing traversal
    temp = front;
  }
  return prev;
}

// Function to get the Kth node from
// a given position in the linked list
function getKthNode(temp, k) {
  // Decrement K as we have
  // started from the 1st node already when we assigned  head  to temp
  k = k - 1;
  // Decrement K until it reaches
  // the desired position
  while (temp !== null && k > 0) {
    // Decrement k as temp progresses
    k--;
    // Move to the next node
    temp = temp.next;
  }
  // Return the Kth node
  return temp;
}
// Function to reverse nodes in groups of K
function kReverse(head, k) {
  // Initialize a temporary
  // node to traverse the list
  let temp = head;

  // Initialize a pointer to track the
  // last node of the previous group
  let prevLast = null;
  // Traverse through the linked list
  while (temp !== null) {
    // Get the Kth node of the current group
    let KthNode = getKthNode(temp, k);
    if (KthNode === null) {
      if (prevLast !== null) prevLast.next = temp; // or nextNode
      // otherwise break out from the loop
      break;
    }
    // Store the next node
    // after the Kth node
    let nextNode = KthNode.next;

    // Disconnect the Kth node
    // to prepare for reversal
    KthNode.next = null;

    // Reverse the nodes from
    // temp to the Kth node
    reverseLinkedList(temp);
    // Adjust the head if the reversal
    // starts from the head
    if (temp === head) {
      head = KthNode;
    } else {
      // Link the last node of the previous
      // group to the reversed group
      prevLast.next = KthNode;
    }
    // Update the pointer to the
    // last node of the previous group
    prevLast = temp;
    // Move to the next group
    temp = nextNode;
  }

  // Return the head of the
  // modified linked list
  return head;
}
// Function to print the linked list
function printLinkedList(head) {
  let temp = head;
  let result = "";
  while (temp !== null) {
    result += temp.data + " ";
    temp = temp.next;
  }
  console.log(result);
}

// Create a linked list with
// values 5, 4, 3, 7, 9, and 2
let head = new Node(5);
head.next = new Node(4);
head.next.next = new Node(3);
head.next.next.next = new Node(7);
head.next.next.next.next = new Node(9);
head.next.next.next.next.next = new Node(2);

// Print the original linked list
console.log("Original Linked List: ");
printLinkedList(head);

// Reverse the linked list
head = kReverse(head, 4);
printLinkedList(head);

// Time Complexity: O(2N) The time complexity consists of actions of reversing 
// segments of K and finding the Kth node which operates in linear time and 
//  the linear time of  our traversal
// Thus, O(N) + O(N) = O(3N), which simplifies to O(N).

// Space Complexity: O(1) The space complexity is O(1) 
// as the algorithm operates in place without any additional space requirements.