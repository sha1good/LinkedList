class Node {
  constructor(data, next = null, back = null) {
    this.data = data;
    this.next = next;
    this.back = back;
  }
}

function convertArrayToDoubleLinkList(arr) {
  // Create the head node with
  // the first element of the array
  let head = new Node(arr[0]);
  let prev = head;

  for (let i = 1; i < arr.length; i++) {
    // Create a new node with data from
    // the array and set its 'back' pointer
    // to the previous node
    let temp = new Node(arr[i], null, prev);
    // Update the 'next' pointer of the
    // previous node to point to the new node
    prev.next = temp;
    // Move 'prev' to the newly created
    // node for the next iteration
    prev = temp;
  }

  // Return the head of the
  // doubly linked list
  return head;
}

function print(head) {
  let currentHead = head;
  while (currentHead !== null) {
    console.log(currentHead.data);
    currentHead = currentHead.next;
  }
}

function findindAllPairsWithGivenSumInDLL(head, sum) {
  let temp1 = head;
  let array = [];

  while (temp1 !== null) {
    let temp2 = temp1.next;

    while (temp2 !== null && temp1.data + temp2.data <= sum) {
      if (temp1.data + temp2.data === sum) {
        array.push([temp1.data, temp2.data]);
      }
      temp2 = temp2.next;
    }
    temp1 = temp1.next;
  }
  return array;
}

function findTail(head) {
  let tail = head;

  while (tail.next !== null) {
    tail = tail.next;
  }

  return tail;
}
function findindAllPairsWithGivenSumInDLLOptimal(head, sum) {
  let left = head;
  let right = findTail(head);
  let result = [];

  while (left.data < right.data) {
    if (left.data + right.data === sum) {
      result.push([left.data, right.data]);
      // Move both pointer if they are equal
      left = left.next;
      right = right.back;
    } else if (left.data + right.data < sum) {
      left = left.next;
    } else {
      right = right.back;
    }
  }

  return result;
}

function main() {
  const arr = [1, 2, 3, 4, 5];
  // Convert the array to a doubly linked list
  let head = convertArrayToDoubleLinkList(arr);
  console.log("Doubly Linked List Initially:  ");
  print(head);
  let key = 5;
  let result = findindAllPairsWithGivenSumInDLL(head, key);
  console.log(" This is the printing the pair that sum up to 5 ");
  console.log(result);
  let res = findindAllPairsWithGivenSumInDLLOptimal(head, key);
  console.log("Printing out the optimal Solution");
  console.log(res);
}

main();

// Time Complexity is O(N2), Reason: Both Loop runs through the length of the Doubly linkedlist
//Space Complexity is O(1):  I am only using  the array to store my answer and that  is all

// Time complexity for Optimal solution is O(2N): Reason:  First Loop for finding the tail and other loop 
// for traversing the whole linked List
// Space complexity is O(1)
