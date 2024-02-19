// // Copy List With Random Pointer
// // A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

// // Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// // For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

// // Return the head of the copied linked list.

// // The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// // val: an integer representing Node.val
// // random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// // Your code will only be given the head of the original linked list.

// // Example 1:

// // Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// // Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
// // Example 2:

// // Input: head = [[1,1],[2,1]]
// // Output: [[1,1],[2,1]]
// // Example 3:

// // Input: head = [[3,null],[3,0],[3,null]]
// // Output: [[3,null],[3,0],[3,null]]

// // Constraints:

// // 0 <= n <= 1000
// // -104 <= Node.val <= 104
// // Node.random is null or is pointing to some node in the linked list.

// Solution 1: Brute Force
// Approach:
// We will use a hash-map for keeping track of deep copies of every node.

// Iterate through the entire list.
// For each node, create a deep copy of each node and hash it with it. Store it in the hashmap.
// Now, again iterate through the given list. For each node, link the deep node present as the hash value of the original node as per original node.
// the head of the deep copy list will be the head of hashed value of original node.
// Dry Run:
// We will iterate through the list. For each node, we will create its deep copy node and hash it with the current node.

// (Not to confuse with new nodes created in the hash table, these nodes are represented by (‘))

// Now we will iterate through the original list again. Since deep copies of each node are hashed with the original node, we can access from original nodes and link them.

// Hence, we achieved the deep copy of the original linked list accessible by the hashed value head of the original list.

// Solution 1: Brute Force
// Approach:
// We will use a hash-map for keeping track of deep copies of every node.

// Iterate through the entire list.
// For each node, create a deep copy of each node and hash it with it. Store it in the hashmap.
// Now, again iterate through the given list. For each node, link the deep node present as the hash value of the original node as per original node.
// the head of the deep copy list will be the head of hashed value of original node.
// Dry Run:
// We will iterate through the list. For each node, we will create its deep copy node and hash it with the current node.

// (Not to confuse with new nodes created in the hash table, these nodes are represented by (‘))

// Now we will iterate through the original list again. Since deep copies of each node are hashed with the original node,
//we can access from original nodes and link them.

//Hence, we achieved the deep copy of the original
//linked list accessible by the hashed value head of the original list.

// Solution 2: Optimized
// Approach:
// The optimisation will be in removing the extra spaces, i.e, the hashmap used in brute force. This approach can be broken down into three steps.

// Create deep nodes of all nodes. Instead of storing these nodes in a hashmap, we will point it to the next of the original nodes.
// Take a pointer, say itr, point it to the head of the list. This will help us to point random pointers as per the original list. This can be achieved by itr->next->random = itr->random->next
// Use three pointers. One dummy node whose next node points to the first deep node. itr pointer at the head of the original list and fast which is two steps ahead of the itr. This will be used to separate the original linked list with the deep nodes list.
// Dry Run:
// In brute force, we created new nodes and stored them in the hashmap. Here, we will create each node and link it next to the original nodes. This contributes to step1. (Blue colored nodes are deep copy nodes)

// In step 2, we use a pointer itr. This pointer will help to create random pointer links among deep copy nodes. (Purple color lines show itr->next->random. Red color lines shows itr->random->next)

// Since this node’s random pointer is pointing to NULL. Therefore, highlighted arrows are not present.

// Our task is to differentiate the original list and deep copy one.

// Finally returning dummy->next we get our desired answer.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.random = null;
  }
}

// function copyRandomList(head) {
//   let hashMap = new Map();
//   let temp = head;
//   //first iteration for inserting deep nodes of every node in the hashmap.
//   /// Create a shallow copy of each node and store it in the map
//   while (temp !== null) {
//     let newNode = new Node(temp.data);
//     hashMap.set(temp, newNode);
//     temp = temp.next;
//   }

//   // Linking the copy nodes with next and random pointers
//   temp = head;

//   while (temp !== null) {
//     hashMap.get(temp).next = hashMap.get(temp.next) || null;
//     hashMap.get(temp).random = hashMap.get(temp.random) || null;
//     temp = temp.next;
//   }

//   return hashMap.get(head);
// }

//Function for the optimal solution
function copyRandomListOptimal(head) {
  let temp = head;
  //step 1
  while (temp !== null) {
    let newNode = new Node(temp.data);
    newNode.next = temp.next;
    temp.next = newNode;
    temp = temp.next.next; // Move temp to the next temp of the original copy
  }

  //Step 2
  let current = head;
  while (current !== null) {
    if (current.random) {
      current.next.random = current.random.next;
    }
    current = current.next.next;
  }

  //step 3
  let dummyNode = new Node(0);
  let currentNode = head;
  let tempNode = dummyNode;
  let front;
  while (currentNode !== null) {
    front = currentNode.next.next;
    tempNode.next = currentNode.next;
    currentNode.next = front;
    tempNode = tempNode.next;
    currentNode = front;
  }

  return dummyNode.next;
}

function printList(head) {
  let temp = head;

  while (temp !== null) {
    let randomVal = temp.random ? temp.random.data : null;
    console.log(
      `Data : ${temp.data}, next: ${
        temp.next ? temp.next.data : null
      }, random: ${randomVal}`
    );
    temp = temp.next;
  }
}
// Main function
function main() {
  let head = null;

  let node1 = new Node(1);
  let node2 = new Node(2);
  let node3 = new Node(3);
  let node4 = new Node(4);

  head = node1;
  head.next = node2;
  head.next.next = node3;
  head.next.next.next = node4;

  head.random = node4;
  head.next.random = node1;
  head.next.next.random = null;
  head.next.next.next.random = node2;

  console.log(
    "Original list: (current node: node pointed by next pointer, node pointed by random pointer)"
  );
  printList(head);

  console.log(
    "Copy list: (current node: node pointed by next pointer, node pointed by random pointer)"
  );
  // let newHead = copyRandomList(head);
  let newHead = copyRandomListOptimal(head);
  printList(newHead);
}

main();

// Time Complexity: O(N)+O(N)

// Reason: Two iterations over the entire list.
// Once for inserting in the map and other for linking nodes with next and random pointer.

// Space Complexity: O(N)

// Reason: Use of hashmap for storing entire data.



//Time Complexity for the optimal Solution
//Time Complexity: O(N)+O(N)+O(N)
//Reason: Each step takes O(N) of time complexity.
//Space Complexity: O(1)
//Reason: No extra data structure was used for computation.
