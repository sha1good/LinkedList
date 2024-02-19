class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function convertArrayToLinkList(array) {
  let head = new Node(array[0]);
  let prev = head;

  for (let i = 1; i < array.length; i++) {
    let temp = new Node(array[i]);
    prev.next = temp;
    prev = temp;
  }

  return head;
}

function sortLinkedListOf01And2(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let count0 = 0,
    count1 = 0,
    count2 = 0;

  let temp = head;
  while (temp !== null) {
    if (temp.data === 0) count0++;
    else if (temp.data === 1) count1++;
    else count2++;
    temp = temp.next;
  }

  // Second Iteration
  temp = head;
  while (temp !== null) {
    if (count0) {
      temp.data = 0;
      count0--;
    } else if (count1) {
      temp.data = 1;
      count1--;
    } else {
      temp.data = 2;
      count2--;
    }
    temp = temp.next;
  }

  return head;
}

function sortLinkedListOf01And2Optimal(head) {
  if (head === null || head.next === null) return head;

  let dummyZeroHead = new Node(-1);
  let dummyOneHead = new Node(-1);
  let dummyTwoHead = new Node(-1);

  let zero = dummyZeroHead;
  let one = dummyOneHead;
  let two = dummyTwoHead;

  let temp = head;
  while (temp) {
    if (temp.data === 0) {
      zero.next = temp;
      zero = temp;
    } else if (temp.data === 1) {
      one.next = temp;
      one = temp;
    } else {
      two.next = temp;
      two = temp;
    }

    temp = temp.next; // I need to move to the  next node
  }

  zero.next = dummyOneHead.next ? dummyOneHead.next : dummyTwoHead.next;
  one.next =  dummyTwoHead.next;
  two.next = null;

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
  let array = [1, 0, 0, 1, 1, 1, 2, 2, 0, 1];
  let head = convertArrayToLinkList(array);
  console.log("Convert the array 2 Linked List:   ");
  print(head);

  console.log("Printing the new head:   ");
  let newHead = sortLinkedListOf01And2(head);
  print(newHead);

  console.log("Printing the optimal solution:   ");
  let manHead = sortLinkedListOf01And2Optimal(head);
  print(manHead);
}

main();

//Time complexity of the brute force solution sortLinkedListOf01And2(head); is
// O(2N). Reason is that, the first iteration for the counting 0, 1,2 is O(N)
//and the final iteration for transfering the data from count list  back to linkedlist
// O(N)
//Space complexity  is O(1): Reason is that we are using an external array to store our data

// Time complexity for the optimal solution is O(N) : Reason,  single traversal
// Space comlexity is O(1) // No space was used
