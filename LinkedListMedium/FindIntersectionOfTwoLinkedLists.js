// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// For example, the following two linked lists begin to intersect at node c1:

// The test cases are generated such that there are no cycles anywhere in the entire linked structure.

// Note that the linked lists must retain their original structure after the function returns.

// Custom Judge:

// The inputs to the judge are given as follows (your program is not given these inputs):

// intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
// listA - The first linked list.
// listB - The second linked list.
// skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
// skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
// The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.

// Example 1:

// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'
// Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
// - Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.
// Example 2:

// Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// Output: Intersected at '2'
// Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.
// Example 3:

// Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// Output: No intersection
// Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
// Explanation: The two lists do not intersect, so return null.

// Constraints:

// The number of nodes of listA is in the m.
// The number of nodes of listB is in the n.
// 1 <= m, n <= 3 * 104
// 1 <= Node.val <= 105
// 0 <= skipA < m
// 0 <= skipB < n
// intersectVal is 0 if listA and listB do not intersect.
// intersectVal == listA[skipA] == listB[skipB] if listA and listB intersect.

// Follow up: Could you write a solution that runs in O(m + n) time and use only O(1) memory?

// Solution 1: Brute-Force

// Approach: We know intersection means a common attribute present between two entities. Here, we have linked lists as given entities.

// What should be the common attribute for two linked lists?

// If you believe a common attribute is a node’s value, then think properly! If we take our example 1, there we can see both lists have nodes of value 3. But it is not the first intersection node. So what’s the common attribute?

// It is the node itself that is the common attribute. So, the process is as follows:-

// Keep any one of the list to check its node present in the other list. Here, we are choosing the second list for this task.
// Iterate through the other list. Here, it is the first one.
// Check if the both nodes are the same. If yes, we got our first intersection node.
// If not, continue iteration.
// If we did not find an intersection node and completed the entire iteration of the second list, then there is no intersection between the provided lists. Hence, return null.

// Solution 2: Hashing

// Approach:

// Can we improve brute-force time complexity? In brute force, we are basically performing “searching”. We can also perform searches by Hashing. Taking into consideration that hashing process takes O(1) time complexity. So the process is as follows:-

// Iterate through list 1 and hash its node address. Why? (Hint: depends on the common attribute we are searching)
// Iterate through list 2 and search the hashed value in the hash table. If found, return node.

// Solution 4: Optimised

// Approach:

// The difference of length method requires various steps to work on it. Using the same concept of difference of length,
//  a different approach can be implemented. The process is as follows:-

// Take two dummy nodes for each list. Point each to the head of the lists.
// Iterate over them. If anyone becomes null, point them to the head of the opposite lists and
// continue iterating until they collide.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Utility function to insert node at the end of the linked list
function insertNode(head, val) {
  const newNode = new Node(val);

  if (head === null) {
    head = newNode;
    return head;
  }

  let temp = head;
  while (temp.next !== null) temp = temp.next;

  temp.next = newNode;
  return head;
}

function intersectionPresent(head1, head2) {
  let st = new Set();

  while (head1 !== null) {
    st.add(head1);
    head1 = head1.next;
  }

  while (head2 !== null) {
    if (st.has(head2)) {
      return head2;
    }
    // else keep on with your iteration
    head2 = head2.next;
  }

  return null;
}

function intersectionPresentOptimal(head1, head2) {
  if (head1 === null || head2 === null) return null;

  let d1 = head1;
  let d2 = head2;

  while (d1 !== d2) {
    d1 = d1 === null ? head2 : d1.next;
    d2 = d2 === null ? head1 : d2.next;
  }
  return d1; // Just return one of them  when  d1 === d2
}

// Utility function to print linked list created
function printList(head) {
  while (head.next !== null) {
    process.stdout.write(head.data + "->");
    head = head.next;
  }
  console.log();
}

function main() {
  let head = null;
  head = insertNode(head, 1);
  head = insertNode(head, 3);
  head = insertNode(head, 1);
  head = insertNode(head, 2);
  head = insertNode(head, 4);

  let head1 = head;
  head = head.next.next.next;
  console.log(head);

  let headSecond = null;
  headSecond = insertNode(headSecond, 3);
  let head2 = headSecond;
  headSecond.next = head;

  // Printing of the lists
  process.stdout.write("List1: ");
  printList(head1);
  process.stdout.write("List2: ");
  printList(head2);
  // Checking if intersection is present
  const resultNode = intersectionPresent(head1, head2);
  if (resultNode === null) {
    console.log("No intersection\n");
  } else {
    console.log("The intersection point is " + resultNode.data);
  }

  const anserNode = intersectionPresentOptimal(head1, head2);

  if (anserNode === null) {
    console.log("No intersection\n");
  } else {
    console.log("The intersection point is " + anserNode.data);
  }
}

main();

// Time Complexity: O(n+m)
// Reason: Iterating through list 1 first takes O(n), then iterating through list 2 takes O(m).
// Space Complexity: O(n)
// Reason: Storing list 1 node address in HashSet.

// Time complexity of the optimized approach
// O( 2 * max(length of L1, length  of L2))
//Space complexity  is O(1)
