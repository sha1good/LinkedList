// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// Constraints:

// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100

// Intuition: We can traverse through the Linked List while maintaining a count of
// nodes let’s say in variable n, and then traversing for
//  2nd time for n/2 nodes to get to the middle of the list.

// Solution 2: [Efficient] Tortoise-Hare-Approach

// Unlike the above approach, we don’t have to maintain node count here and we will be able to find the middle node in a single traversal so this approach is more efficient.

// Intuition: In the Tortoise-Hare approach, we increment slow ptr by 1 and fast ptr by 2, so if take a close look fast ptr will travel double that of the slow pointer. So when the fast ptr will be at the end of the Linked List, slow ptr would have covered half of the Linked List till then. So slow ptr will be pointing towards the middle of Linked List.

// Approach:

// Create two pointers slow and fast and initialize them to a head pointer.
// Move slow ptr by one step and simultaneously fast ptr by two steps until fast ptr is NULL or next of fast ptr is NULL.
// When the above condition is met, we can see that the slow ptr is pointing towards the middle of the Linked List and hence we can return the slow pointer.

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function middleOfLinkedList(head) {
  let count = 0;
  let temp = head;
  while (temp !== null) {
    count++;
    temp = temp.next;
  }
  console.log(count);

  // second Iteration will given us the middle node

  temp = head;
  for (let i = 0; i < Math.floor(count / 2); i++) {
    temp = temp.next;
  }
  return temp;
}

function middleOfLinkedListOptimal(head) {
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
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
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  //head = middleOfLinkedList(head);
  head = middleOfLinkedListOptimal(head);
  // Print the reversed linked list
  process.stdout.write("Reversed Linked List: ");
  printLinkedList(head);
}

main();

// Brute Force Approach
// Time complexity
// O(N + N/2),
//Reason: We are traversing using a while loop in two pass
// Space complexity  is (1), No space was used

// Optimal Solution
// Time complexity
// O(N/2),
//Reason: We are traversing using a while loop in one pass. Just half of the linked list

// Space complexity  is O(1), No additional space was  used
