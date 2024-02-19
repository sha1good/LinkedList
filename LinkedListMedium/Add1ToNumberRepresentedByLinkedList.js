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

function reverseLinkedList(head) {
  let temp = head;
  let prev = null;
  while (temp !== null) {
    let front = temp.next;
    temp.next = prev;

    prev = temp;
    temp = front;
  }

  return prev;
}
function add1ToNumberRepresentedByLinkedList(head, numberToAdd) {
  head = reverseLinkedList(head);

  let temp = head,
    carry = numberToAdd;

  while (temp !== null) {
    temp.data = temp.data + carry;

    if (temp.data < 10) {
      carry = 0;
      break;
    } else {
      carry = 1;
      temp.data = 0;
    }

    temp = temp.next;
  }

  if (carry === 1) {
    head = reverseLinkedList(head);
    let newNode = new Node(carry);
    newNode.next = head;
    return newNode;
  }
  head = reverseLinkedList(head);
  return head;
}

function add1ToLinkedListHelper(temp) {
  if (temp === null) {
    return 1; // This  is the number the question asked us to add
  }

  let carry = add1ToLinkedListHelper(temp.next);
  temp.data = temp.data + carry;

  if (temp.data < 10) {
    return 0;
  }
  temp.data = 0;
  return 1;
}

function add1ToNumberRepresentedByLinkedListRecursiveApproach(head) {
  let temp = head;

  let carry = add1ToLinkedListHelper(temp);
  if (carry === 1) {
    let newNode = new Node(carry);
    newNode.next = head;
    return newNode;
  }
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
  let array = [9, 9, 9, 9];
  let head = convertArrayToLinkList(array);
  console.log("Convert the array 2 Linked List:   ");
  // head = add1ToNumberRepresentedByLinkedList(head, 1);
  head = add1ToNumberRepresentedByLinkedListRecursiveApproach(head);
  print(head);
}
main();

// Time complexity  is O(3N)
// Space complexity is O(1)

// Time Complexity  for the recursive Approach  is O(N)
// Space complexity is O(N)
