// Flattening a Linked List
// Flattening a Linked List

// Problem Statement: Given a Linked List of size N, where every node represents a sub-linked-list and contains two pointers:

// (i) a next pointer to the next node,

// (ii) a bottom pointer to a linked list where this node is head.

// Each of the sub-linked-list is in sorted order.

// Flatten the Link List such that all the nodes appear in a single level while maintaining the sorted order.

// Note: The flattened list will be printed using the bottom pointer instead of the next pointer.

// Examples:

// Example 1:
// Input:
// Number of head nodes = 4
// Array holding length of each list with head and bottom = [4,2,3,4]
// Elements of entire linked list = [5,7,8,30,10,20,19,22,50,28,35,40,45]

// Output:
//  Flattened list = [5,7,8,10,19,20,22,28,30,35,40,45,50]
// Explanation:
//  Flattened list is the linked list consisting entire elements of the given list in sorted order
// Example 2:
// Input:
// Number of head nodes = 4
// Array holding length of each list with head and bottom = [4,1,3,1]
// Elements of entire linked list = [5,7,8,30,10,19,22,50,28]

// Output:
//  Flattened list = [5,7,8,10,19,22,28,30,50]
// Explanation:
//  Flattened list is the linked list consisting entire elements of the given list in sorted order

class Node {
  constructor(data, next = null, bottom = null) {
    this.data = data;
    this.next = next;
    this.bottom = bottom;
  }
}

class FlattenOfLinkedList {
  mergeTwoLists(head1, head2) {
    let dummyNode = new Node(0);
    let resultantNode = dummyNode;

    while (head1 !== null && head2 !== null) {
      if (head1.data <= head2.data) {
        dummyNode.bottom = head1;
        head1 = head1.bottom;
      } else {
        dummyNode.bottom = head2;
        head2 = head2.bottom;
      }
      dummyNode = dummyNode.bottom;
    }

    if (head1 !== null) {
      dummyNode.bottom = head1;
    }

    if (head2 !== null) {
      dummyNode.bottom = head2;
    }

    return resultantNode.bottom;
  }
  flatten(root) {
    if (root === null || root.next === null) {
      return root;
    }

    root.next = this.flatten(root.next);
    root = this.mergeTwoLists(root, root.next);
    return root;
  }
}


// Time complexity = O(N * N * M)
//  
// Space complexity  is O(N), recursion stack space