// Before moving on to this approach, make sure your concepts on the basics of Recursion are crystal clear. Refer to Introduction to Recursion to brush up.

// Recursion gives the ability to break down a problem statement into small problems that can be solved incrementally. It keeps solving these smaller problems until it reaches the smallest possible solution, often referred to as the base case, from where it can start combining the results of those smaller solutions to ultimately solve the original, larger problem.

// In this case, tackling the larger problem involves reversing a linked list with N = 4 nodes. Recursion allows us to break this task down into progressively smaller subproblems, starting with the case of 3 nodes, then the last 2 nodes, and ultimately reaching the base case where only 1 node remains. In the base case, reversing the linked list is straightforward, as a list with just one node is already in its reversed form, and we can simply return it as is.

// Algorithm:

// Base Case:
// Check if the linked list is empty or contains only one node. Return the head as it’s already reversed in these cases.

// Recursive Function:
// The core of the algorithm lies in implementing a recursive function responsible for reversing the linked list. This function operates based on the following principle:

// If the base case conditions are not met, the function invokes itself recursively. This recursion continues until it reaches the base case, gradually reversing the linked list starting from the second node (node after it) onward.

// Return

// Following the recursion, the function returns the new head of the reversed linked list. This head marks the last node of the original list before reversal, now the first node in the reversed sequence.

// Steps:

// Step 1: Establish Base Case Conditions: Check if the linked list is either empty or contains only one node. If so, the list is already reversed; hence, return the head as is.

// Step 2: Recursively Reverse the List: Begin the recursive step by reversing the linked list, starting from the second node. Utilise a recursive call to the reverse linked list function, passing the next node as an argument.

// Step 3: Preserve Access to Remaining Nodes: To maintain access to the rest of the linked list while reversing the order, store a reference to the node following the current ‘head’ node. This step ensures continuity in the link sequence during reversal.

// Step 4: Reverse Link Direction: Adjust the ‘front’ node to point to the current ‘head’ node in the reversed order. This action effectively reverses the link between the ‘head’ node and the ‘front’ node.

// Step 5: Prevent Cyclic References: Break the link from the current ‘head’ node to the ‘front’ node to prevent any cyclic formations. Set ‘head->next’ to ‘NULL’ to ensure the reversed segment of the list does not create a loop.

// Step 6: Return the New Head: Finally, return the ‘newHead,’ which signifies the new head of the reversed linked list. This ‘newHead’ was initially the last node in the list before the reversal commenced.

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function reverseLinkedList(head) {
  // Base case:
  // If the linked list is empty or has only one node,
  // return the head as it is already reversed.
  if (head === null || head.next === null) {
    return head;
  }

  // Recursive step:
  // Reverse the linked list starting
  // from the second node (head.next).
  let newHead = reverseLinkedList(head.next);

  // Save a reference to the node following
  // the current 'head' node.
  let front = head.next;

  // Make the 'front' node point to the current
  // 'head' node in the reversed order.
  front.next = head;
  // Break the link from the current 'head' node
  // to the 'front' node to avoid cycles.
  head.next = null;
  // Return the 'newHead,' which is the new
  // head of the reversed linked list.
  return newHead;
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

function main() {
  // Create a linked list with
  // values 1, 3, 2, and 4
  let head = new Node(1);
  head.next = new Node(3);
  head.next.next = new Node(2);
  head.next.next.next = new Node(4);
  head = reverseLinkedList(head);
  // Print the reversed linked list
  process.stdout.write("Reversed Linked List: ");
  printLinkedList(head);
}

main();

// Time Complexity: O(N)

// Space Complexity : O(1) No additional space is used explicitly for
// data structures or allocations during the linked list reversal process.
// However, it’s important to note that there is an implicit use of stack space due to recursion.
// This recursive stack space stores function calls and associated variables during the recursive
// traversal and reversal of the linked list. Despite this, no extra memory beyond the program’s existing execution
// space is allocated, hence maintaining a space complexity of O(1).
