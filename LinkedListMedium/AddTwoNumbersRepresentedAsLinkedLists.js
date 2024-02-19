// // You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// // You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// // Example 1:

// // Input: l1 = [2,4,3], l2 = [5,6,4]
// // Output: [7,0,8]
// // Explanation: 342 + 465 = 807.
// // Example 2:

// // Input: l1 = [0], l2 = [0]
// // Output: [0]
// // Example 3:

// // Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// // Output: [8,9,9,9,0,0,0,1]

// // Constraints:

// // The number of nodes in each linked list is in the range [1, 100].
// // 0 <= Node.val <= 9
// // It is guaranteed that the list represents a number that does not have leading zeros.

// Solution 1: Elementary Math

// Intuition: Keep track of the carry using a variable and simulate digits-by-digits sum starting from the head of the list, which contains the least significant digit.

// Approach:

// Visualization of the addition of two numbers:

// 342 + 465 = 807

// 342+465=807.

// Each node contains a single digit and the digits are stored in reverse order.

// Just like how you would sum two numbers on a piece of paper, we begin by summing the least significant digits, which is the head of l1 and l2. Since each digit is in the range of 0…9, summing two digits may “overflow”. For example

// 5 + 7 = 12. In this case, we set the current digit to 2 and bring over the carry=1 to the next iteration.

// carry must be either 0 or 1 because the largest possible sum of two digits (including the carry) is 9 + 9 + 1 = 19.

// Psuedocode:

// Create a dummy node which is the head of new linked list.
// Create a node temp, initialise it with dummy.
// Initialize carry to 0.
// Loop through lists l1 and l2 until you reach both ends, and until carry is present.
// Set sum=l1.val+ l2.val + carry.
// Update carry=sum/10.
// Create a new node with the digit value of (sum%10) and set it to temp node’s next, then advance temp node to next.
// Advance both l1 and l2.
// Return dummy’s next node.
// Note that we use a dummy head to simplify the code. Without a dummy head, you would have to write extra conditional statements to initialize the head’s value.

// Take extra caution in the following cases:

// Test case	Explanation
// l1=[0,1], l2=[0,1,2]	When one list is longer than the other.
// l1=[], l2=[0,1]	When one list is null, which means an empty list.
// l1=[9,9], l2=[1]	The sum could have an extra carry of one at the end, which is easy to forget.

class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function convertArrayToLinkList(array) {
  let head = new ListNode(array[0]);
  let prev = head;

  for (let i = 1; i < array.length; i++) {
    let temp = new ListNode(array[i]);
    prev.next = temp;
    prev = temp;
  }

  return head;
}

function addTwoLinkedList(head1, head2) {
  // Initial configuration
  let dummyNode = new ListNode(0);
  let temp = dummyNode;
  let carry = 0;

  while (head1 !== null || head2 !== null || carry !== 0) {
    let sum = 0;

    if (head1 !== null) {
      sum += head1.data;
      head1 = head1.next;
    }

    if (head2 !== null) {
      sum += head2.data;
      head2 = head2.next;
    }

    sum += carry;
    carry = Math.floor(sum / 10);
    let node = new ListNode(sum % 10);
    temp.next = node;
    temp = node;
  }
  return dummyNode.next;
}

function print(head) {
  while (head !== null) {
    console.log(head.data + " ");
    head = head.next;
  }

  console.log();
}

function main() {
  let array1 = [2, 4, 3];
  let head1 = convertArrayToLinkList(array1);
  console.log("Convert the first array 2 Linked List:   ");
  print(head1);

  let array2 = [5, 6, 7, 9];
  let head2 = convertArrayToLinkList(array2);
  console.log("Convert the second array 2 Linked List:   ");
  print(head2);

  let head = addTwoLinkedList(head1, head2);
  console.log("Printing the result of the 2 Linked List:   ");
  print(head);
}

main();

// Time Complexity: O(max(m,n)). Assume that m and n represent the length
// of head1 and head2 respectively, the algorithm above iterates at most max(m,n) times.

//Space Complexity: O(max(m,n)). The length of the new list is at most max(m,n)+1.
