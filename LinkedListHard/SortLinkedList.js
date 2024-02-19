// Medium
// Topics
// Companies
// Given the head of a linked list, return the list after sorting it in ascending order.

// Example 1:

// Input: head = [4,2,1,3]
// Output: [1,2,3,4]
// Example 2:

// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]
// Example 3:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is in the range [0, 5 * 104].
// -105 <= Node.val <= 105

// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertNode(head, data) {
  let newNode = new Node(data);
  if (head === null) {
    head = newNode;
  } else {
    let current = head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
  return head;
}

function sortSolution(head) {
  if (head === null || head.next === null) return head;
  let array = [];
  let temp = head;

  while (temp !== null) {
    array.push(temp.data);
    temp = temp.next;
  }

  array.sort((a, b) => a - b);
  temp = head;
  let i = 0;
  while (temp !== null) {
    temp.data = array[i];
    i++;
    temp = temp.next;
  }

  return head;
}

// Using Tortiose and Hare Algorithms
function findMiddle(head) {
  let slow = head;
  let fast = head.next;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// Now, let us merge the two linked List
function merge2LinkedList(head1, head2) {
  let dummyNode = new Node(-1);
  let current = dummyNode;

  while (head1 !== null && head2 !== null) {
    if (head1.data < head2.data) {
      current.next = head1;
      head1 = head1.next;
    } else {
      current.next = head2;
      head2 = head2.next;
    }
    current = current.next;
  }

  // if there  element left for head1
  if (head1 !== null) {
    current.next = head1;
  }

  if (head2 !== null) {
    current.next = head2;
  }

  return dummyNode.next;
}
function sortOptimalSolution(head) {
  if (head === null || head.next === null) return head;

  let middle = findMiddle(head);
  let lefthead = head;
  let righthead = middle.next;
  middle.next = null; // this way, I have successfully split the linked List into two
  lefthead = sortOptimalSolution(lefthead);
  righthead = sortOptimalSolution(righthead);

  head = merge2LinkedList(lefthead, righthead);
  return head;
}

function printList(head) {
  let current = head;
  while (current !== null) {
    process.stdout.write(current.data + " ");
    current = current.next;
  }
  process.stdout.write("\n");
}

function main() {
  let head = null;
  // Inserting Nodes
  head = insertNode(head, 3);
  head = insertNode(head, 4);
  head = insertNode(head, 2);
  head = insertNode(head, 1);
  head = insertNode(head, 5);

  process.stdout.write("Original list: ");
  printList(head);

  //let newHead = sortSolution(head);
  let newHead = sortOptimalSolution(head);
  // process.stdout.write("After " + k + " iterations: ");
  printList(newHead);
}

main();

// Time complexity for the brute Force solutoion is
//O(2N) + NlogN
// Space complexity is O(N)

// Time complexity for the Optimal solutoion is
// approx. NlogN
// Space complexity is O(logn) which is the recursion stack space
