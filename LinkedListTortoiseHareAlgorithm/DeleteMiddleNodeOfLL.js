// Medium
// Topics
// Companies
// Hint
// You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

// The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

// For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

// Example 1:

// Input: head = [1,3,4,7,1,2,6]
// Output: [1,3,4,1,2,6]
// Explanation:
// The above figure represents the given linked list. The indices of the nodes are written below.
// Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
// We return the new list after removing this node.
// Example 2:

// Input: head = [1,2,3,4]
// Output: [1,2,4]
// Explanation:
// The above figure represents the given linked list.
// For n = 4, node 2 with value 3 is the middle node, which is marked in red.
// Example 3:

// Input: head = [2,1]
// Output: [2]
// Explanation:
// The above figure represents the given linked list.
// For n = 2, node 1 with value 1 is the middle node, which is marked in red.
// Node 0 with value 2 is the only node remaining after removing node 1.

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 1 <= Node.val <= 105
class Node {
  constructor(data, next = null) {
    // Data stored in the node
    this.data = data;

    // Pointer to the next node in the list
    this.next = next;
  }
}

function deleteMiddleOfLinkedList(head) {
  if (head === null || head.next === null) return null;
  let count = 0;
  let temp = head;
  while (temp !== null) {
    count++;
    temp = temp.next;
  }

  let resultant = Math.floor(count / 2); // This is the middle of the list
  //Reset the temp variable back to the head of the linkedList
  temp = head;

  // Then, you do not need to iterate to the middle of the list,
  // All you need is to iterate one step before the middle of the linked list
  // then connect temp.next = temp.next.next
  while (temp !== null) {
    resultant--; // 2 to 1 to 0
    if (resultant === 0) {
      temp.next = temp.next.next;
    }
    temp = temp.next; // If not equal to 0, you will have to keep moving temp
  }
  return head;
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

// Using tortoise and hare algorithms
function deleteMiddleOfLinkedListOptimal(head) {
  let slow = head;
  let fast = head;

  // Slight changes to Tortoise and hare algorithms.
  // I just need to skip one step and afterwards, in the
  // while loop , I will move both of the simultaneously
  fast = fast.next.next;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow.next = slow.next.next;
  return head;
}
function main() {
  // Create a linked list with
  // values 1, 3, 2, and 4
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  // head = deleteMiddleOfLinkedList(head);
  head = deleteMiddleOfLinkedListOptimal(head);
  // Print the reversed linked list
  //process.stdout.write("Brute Force Approach Linked List: ");
  // printLinkedList(head);
  process.stdout.write("Optimal Approach Linked List: ");
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
