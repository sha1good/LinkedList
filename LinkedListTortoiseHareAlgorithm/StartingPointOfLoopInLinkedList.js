// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
//Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle.
//Note that pos is not passed as a parameter.

// Do not modify the linked list.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.
// Example 2:

// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.
// Example 3:

// Input: head = [1], pos = -1
// Output: no cycle
// Explanation: There is no cycle in the linked list.

// Constraints:

// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.

// Follow up: Can you solve it using O(1) (i.e. constant) memory?

// Solution:

// Solution 1: Brute Force

// Approach:

// We can store nodes in a hash table so that, if a loop exists, the head will encounter the same node again. This node will be present in the table and hence, we can detect the loop. The steps are:-

// Iterate the given list.
// For each node visited by the head pointer, check if the node is present in the hash table.
// If yes, the loop detected
// If not, insert the node in the hash table and move the head pointer ahead.
// If the head reaches null, then the given list does not have a cycle in it.
// Dry Run:

// We start iterating each node and storing nodes in the hash table if an element is not present.

// Node(1) is not present in the hash table. So, we insert a node in it and move head ahead.

// Node(2) is not present in the hash table. So, we insert a node in it and move head ahead.

// Node(3) is not present in the hash table. So, we insert a node in it and move head ahead.

// Node(4) is not present in the hash table. So, we insert a node in it and move head ahead.

// Node(3) is not present in the hash table. So, we insert a node in it and move head ahead. Though this node contains 3 as a value, it is a different node than the node at position 3.

// Node(6) is not present in the hash table. So, we insert a node in it and move head ahead.

// Node(10) is not present in the hash table. So, we insert a node in it and move head ahead.

// We reached the same node which was present in the hash table. Thus, the starting node of the cycle is node(3).

//Optimal Approach
// Solution 2: Slow and Fast Pointer Method

// Approach:

// The following steps are required:

// Initially take two pointers, fast and slow. The fast pointer takes two steps ahead while the slow pointer will take a single step ahead for each iteration.
// We know that if a cycle exists, fast and slow pointers will collide.
// If the cycle does not exist, the fast pointer will move to NULL
// Else, when both slow and fast pointer collides, it detects a cycle exists.
// Take another pointer, say entry. Point to the very first of the linked list.
// Move the slow and the entry pointer ahead by single steps until they collide.
// Once they collide we get the starting node of the linked list.
// But why use another pointer, or xentry?

// Let’s say a slow pointer covers the L2 distance from the starting node of the cycle until it collides with a fast pointer. L1 is the distance traveled by the entry pointer to the starting node of the cycle. So, in total, the slow pointer covers the L1+L2 distance. We know that a fast pointer covers some steps more than a slow pointer. Therefore, we can say that a fast pointer will surely cover the L1+L2 distance. Plus, a fast pointer will cover more steps which will accumulate to nC length where cC is the length of the cycle and n is the number of turns. Thus, the fast pointer covers the total length of L1+L2+nC.

// We know that the slow pointer travels twice the fast pointer. So this makes the equation to

// 2(L1+L2) = L1+L2+nC. This makes the equation to

// L1+L2 = nC. Moving L2 to the right side

// L1 = nC-L2 and this shows why the entry pointer and the slow pointer would collide.

// Dry Run:

// We initialize fast and slow pointers to the head of the list. Fast moves two steps ahead and slowly takes a single step ahead.

// We can see that the fast and slow pointer collides which shows the cycle exists. The entry pointer is pointed to the head of the list. And move them forward until it collides with the slow pointer.

// We see that both collide and hence, we get the starting node of the list.

class Node {
  constructor(data, next = null) {
    // Data stored in the node
    this.data = data;

    // Pointer to the next node in the list
    this.next = next;
  }
}

function insertNode(head, value) {
  if (head === null) {
    return new Node(value);
  }

  let temp = head;
  while (temp.next !== null) {
    temp = temp.next;
  }
  let newNode = new Node(value);
  temp.next = newNode;
  return head;
}

function createCycle(head, position) {
  let pointer = head;
  let temp = head;
  let count = 0;

  // Find the node at the specified position
  while (temp.next !== null && count !== position) {
    count++;
    pointer = pointer.next;
  }

  // If position is beyond the end of the list,
  // return head without creating a cycle
  if (count !== position) {
    return head;
  }

  // Traverse to the end of the list
  while (temp.next !== null) {
    temp = temp.next;
  }

  // Connect the last node to the node
  // at the specified position to create the cycle
  temp.next = pointer;
  return head; // Return the updated head after creating the cycle
}

function detectCycleInLinkedList(head) {
  let temp = head;
  let st = new Set();
  while (temp !== null) {
    if (st.has(temp)) {
      return temp; // Return the node where the cycle is detected
    }
    st.add(temp);
    temp = temp.next;
  }
  return null;
}

function detectCycleInLinkedListOptima(head) {
  let slow = head;
  let fast = head;
  let entry = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      while (slow !== entry) {
        slow = slow.next;
        entry = entry.next;
      }
      return slow;
    }
  }
  return null;
}
function main() {
  let head = null;
  head = insertNode(head, 1);
  head = insertNode(head, 2);
  head = insertNode(head, 3);
  head = insertNode(head, 4);
  head = insertNode(head, 3);
  head = insertNode(head, 6);
  head = insertNode(head, 10);

  createCycle(head, 2);
  //let result = detectCycleInLinkedList(head);
  let result = detectCycleInLinkedListOptima(head);
  console.log(result);
  if (result === null) {
    console.log("No cycle found!"); // Fix typo in the message
  } else {
    let temp = head;
    let position = 0;
    while (temp !== result) {
      position++;
      temp = temp.next;
    }
    console.log("Tail connects at pos " + position);
  }
}

main();

//   Output: Tail connects at pos 2

// Time Complexity: O(N)

// Reason: Iterating the entire list once.

// Space Complexity: O(N)

// Reason: We store all nodes in a hash table.

// For Optimal Approach
//  Output: Tail connects at pos 2

// Time Complexity: O(N)
// Reason: We can take overall iterations and club them to O(N)
// Space Complexity: O(1)
// Reason: No extra data structure is used.
