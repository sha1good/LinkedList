// // Given the head of a linked list, remove the nth node from the end of the list and return its head.

// // Example 1:

// // Input: head = [1,2,3,4,5], n = 2
// // Output: [1,2,3,5]
// // Example 2:

// // Input: head = [1], n = 1
// // Output: []
// // Example 3:

// // Input: head = [1,2], n = 1
// // Output: [1]

// // Constraints:

// // The number of nodes in the list is sz.
// // 1 <= sz <= 30
// // 0 <= Node.val <= 100
// // 1 <= n <= sz

// Algorithm / Intuition
// The simplest way to delete the Nth node from the end is to delete the (L-N+1)th node from the start of the linked list, where L is the total length of the linked list.

// Therefore, this problem can be broken down into two sub-problems:

// The first part involves the calculation of the length of the linked list. You can read about finding the length here.
// The second part involves the deletion of the (L-N+1)th node from the start of the linked list. You can read about the deletion of a node here.
// There are two edge cases to consider:

// If N equals 1, this means we have to delete the tail of the linked list.  You can read about the deletion of the tail here.
// If N equals the length of the linked list, we have to delete the head of the linked list. You can read about the deletion of the head here.
// Algorithm
// Initialize a temp pointer that will be used to traverse the list.

// 2. Create a cnt variable and initialize it to 0. Traverse the linked list, and at each node, increment cnt. Finally, when the pointer reaches NULL, return cnt, which contains the total length of the linked list.

// 3. Now, after knowing the length of the linked list, the first sub-problem is solved. To solve the second sub-problem, we will follow the steps that we used to delete the Kth node of the linked list.

// 4. To delete the (L-N+1)th node of the linked list, create a new temp pointer to the head. Initialize a variable res to L-N, and start iterating the linked list while decrementing res at each node. Once res equals 0, we know that temp will be pointing to the (L-N)th node, therefore, stop the traversal.

// 5. To create a new link, point the (L-N)th node to the (L-N+2)th node of the linked list, effectively skipping the (L-N+1)th node.

// 6. Finally, free up the memory being occupied by the (L-N+1)th node, thus deleting this node.

// Note: In the case of languages like Java, Python, and Javascript, there is no need for the deletion of objects or nodes because these have an automatic garbage collection mechanism that automatically identifies and reclaims memory that is no longer in use.

//Optima Approach

// Algorithm / Intuition
// The brute force, in the worst case, has a time complexity of O(2*L), where L is the length of the linked list. Therefore, it is not the most efficient algorithm, as we are traversing the entire list twice.

// To enhance efficiency, we will involve two pointers, a fast pointer and a slow pointer. The fast-moving pointer will initially be exactly N nodes ahead of the slow-moving pointer. After which, both of them will move one step at a time. When the fast pointer reaches the last node, i.e., the L-th node, the slow is guaranteed to be at the (L-N)-th node, where L is the total length of the linked list.

// Algorithm
// Initialize two pointers, `slow` and `fast`, to the head of the linked list. Initially, only fast will move till it crosses N nodes, after which both of the pointers will move simultaneously.

// 2. Traverse the linked list till the fast pointer reaches the last node, that is, the Lth Node, at this stage, the slow pointer is guaranteed to be at the (L-N)th node.

// 3. Point this slow pointer to the (L-N+2)th node, effectively skipping the Nth node from the end or the (L-N+1)th node from the start.

// 4. Finally, free up the space occupied by this to delete it.

// Note: In the case of languages like Java, Python, and Javascript, there is no need for the deletion of objects or nodes because these have an automatic garbage collection mechanism that automatically identifies and reclaims memory that is no longer in use.

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function DeleteNthNodeFromEnd(head, N) {
  // Function to delete the Nth node from the end of the linked list
  if (head === null) {
    return null;
  }

  let count = 0;
  let temp = head;

  while (temp !== null) {
    count++;
    temp = temp.next;
  }

  // If N equals the total number of nodes, delete the head
  if (count === N) {
    let newHead = head.next;
    head = null;
    return newHead;
  }

  // Calculate the position of the node to delete (res)
  let result = count - N;
  temp = head;
  while (temp !== null) {
    result--;
    if (result === 0) {
      break; //  Break out of the loop
    }
    temp = temp.next;
  }

  let deleteNode = temp.next;
  temp.next = temp.next.next;
  deleteNode = null;
  return head;
}

// Function to delete the Nth node from the end of the linked list
function DeleteNthNodeFromEndOptimal(head, N) {
  let fastPointer = head;
  let slowPointer = head;

  // Now Move the fastp pointer N nodes ahead
  for (let i = 0; i < N; i++) fastPointer = fastPointer.next;
  if (fastPointer === null) return null;

  //temp = head;
  while (fastPointer.next !== null) {
    fastPointer = fastPointer.next;
    slowPointer = slowPointer.next;
  }

  let deleteNode = slowPointer.next;
  slowPointer.next = slowPointer.next.next;
  deleteNode = null;
  return head;
}

function print(head) {
  while (head !== null) {
    console.log(head.data + " ");
    head = head.next;
  }

  console.log();
}

function main() {
  const arr = [1, 2, 3, 4, 5];
  const N = 2;

  let head = new Node(arr[0]);
  head.next = new Node(arr[1]);
  head.next.next = new Node(arr[2]);
  head.next.next.next = new Node(arr[3]);
  head.next.next.next.next = new Node(arr[4]);

  // Delete the Nth node from the end and print the modified linked list
  //head = DeleteNthNodeFromEnd(head, N);
  head = DeleteNthNodeFromEndOptimal(head, N);
  print(head);
}

main();
// Time Compexity is O(L) + O(L - N), We are calculating the lenght of the linked list
// and then iterating up to (L- N)th Nodes of the linked list. Where L is the length of the
//linked list
//Space complexity is O(1)

//Time complexity for the optimal Solution is O(N)
//Space complexity is O(1)
