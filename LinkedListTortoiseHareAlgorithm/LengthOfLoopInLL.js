class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function findLengthLoopInLinkedList(head) {
  let map = new Map();

  let temp = head;
  let timer = 1;

  while (temp !== null) {
    if (map.has(temp)) {
      let value = map.get(temp);
      return timer - value;
    }
    map.set(temp, timer++);
    temp = temp.next;
  }

  return 0; // This is for Linear linked List
}

function findLengthHelper(slow, fast) {
  let count = 1;
  fast = fast.next;
  while (slow !== fast) {
    count++;
    fast = fast.next;
  }

  return count;
}

function findLengthLoopInLinkedListOptimalSolution(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return findLengthHelper(slow, fast);
    }
  }

  return 0;
}
// Create a sample linked list
// with a loop for testing
let head = new Node(1);
let second = new Node(2);
let third = new Node(3);
let fourth = new Node(4);
let fifth = new Node(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

//create a loop
fifth.next = third;

let res = findLengthLoopInLinkedList(head);
let result = findLengthLoopInLinkedListOptimalSolution(head);
console.log(res);
console.log(result);

// Brute Force Approach
// Time complexity
// O(N * 2 log N),
//Reason: We are traversing using a while loop and perform two operations(search and insertion) with the map

// Space complexity  is O(N), cos we are using a map to store our elements

// Optimal Solution
// Time complexity
// O(N),
//Reason: We are traversing using a while loop

// Space complexity  is O(1), No additional space was  used
