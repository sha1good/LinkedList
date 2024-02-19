// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []

// Constraints:

// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.

// Since they have  already given us a linked List as a list, then there is no need
// to be creating head. All we have to do is to make use of the list given to us
// cos, the list contains the  each  head of each list

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function convertArrayToLinkList(array) {
  if (array.length === 0) return null;
  let head = new Node(array[0]);

  let temp = head;
  for (let i = 1; i < array.length; i++) {
    let newTemp = new Node(array[i]);
    temp.next = newTemp;

    temp = newTemp;
  }

  // Assign null to the next property of the last node
  temp.next = null;
  return head;
}

function mergeKLinkedList(list) {
  // Take an array
  let array = [];

  for (let i = 0; i < list.length; i++) {
    let head = convertArrayToLinkList(list[i]);
    let temp = head; // this is first head
    while (temp !== null) {
      array.push(temp.data);
      temp = temp.next;
    }
  }

  let newarry = array.sort((a, b) => a - b);
  head = convertArrayToLinkList(newarry);
  return head;
}

function merge2LinkedList(head1, head2) {
  let temp1 = head1;
  let temp2 = head2;

  let dummyNode = new Node(0);
  let current = dummyNode;

  while (temp1 !== null && temp2 !== null) {
    if (temp1.data <= temp2.data) {
      current.next = temp1;
      temp1 = temp1.next;
    } else {
      current.next = temp2;
      temp2 = temp2.next;
    }
    current = current.next;
  }

  // Attached the remaining  Node if there is in head1 and same for head2
  if (temp1 !== null) {
    current.next = temp1;
  }

  if (temp2 !== null) {
    current.next = temp2;
  }

  return dummyNode.next;
}

function mergeKLinkedListAnotherApproach(list) {
  let head = convertArrayToLinkList(list[0]); // Get the first head  out of the list  of heads we have in the list

  // then start iterating the list from the first index
  for (let i = 1; i < list.length; i++) {
    let head2 = convertArrayToLinkList(list[i]);
    head = merge2LinkedList(head, head2); // list[i] will take care of the all the remaining heads
  }

  return head;
}

function mergeKLinkedListOptimalApproach(lists) {
  let pq = [];

  for (let i = 0; i < lists.length; i++) {
    if (lists[i]) {
      let head = convertArrayToLinkList(lists[i]);
      pq.push([head.data, head]);
    }
  }

  pq.sort((a, b) => a[0] - b[0]);
  let dummyNode = new Node(0);
  let temp = dummyNode;

  //  Loop through the priority queue
  while (pq.length !== 0) {
    let [integer, node] = pq.shift();
    temp.next = node;
    // if that particular node has next and it is not null
    if (node.next) {
      pq.push([node.next.data, node.next]);
    }
    // Re-sort the priority queue after pushing a new node
    pq.sort((a, b) => a[0] - b[0]);
    temp = temp.next;
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
  let lists = [
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ];

  // All these guys inside the list are each each of the linkedList
  // e.g list = [head1, head2, head3....]
  //let result = mergeKLinkedList(lists);
  //let resul = mergeKLinkedListAnotherApproach(lists);
  let res = mergeKLinkedListOptimalApproach(lists);
  print(res);
}

main();

// Time complexity is O(N*K) + O(M) + MlogM, Reason is that, we are using the first two loop(N*k)
// MlogM for sorting the array and O(M) for  converting the newArray created back to linkedList

//  Space complexity  is O(N) + O(N): The first for creating the array and the other one is the for the linkedlist

// Time complexity is
// O(N) + O(2N) + 3N + 4N .... kN
// ON(1 + 2+3+ 4.... k)
// ON(K(k+1)/2)
//Space Complexity O(1)

//Time Complexity of the optimal Approach 
// 2*nklogk
// space complexity is O(K)
