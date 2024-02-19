class Node {
  constructor(data, next = null, back = null) {
    this.data = data; //// Data stored in the node
    this.next = next; // Pointer to the next node in the list (forward direction)
    this.back = back; // Pointer to the previous node in the list (backward direction)
  }
}

let array = [3, 7, 9, 0, 2];

function convertArrayToDoubleLinkList(array) {
  let head = new Node(array[0]);

  let prev = head;

  for (let i = 1; i < array.length; i++) {
    let temp = new Node(array[i], null, prev);
    prev.next = temp;
    prev = temp;
  }

  return head;
}

function print(head) {
  let currentHead = head;
  while (currentHead !== null) {
    console.log(currentHead.data);
    currentHead = currentHead.next;
  }
}

//creating a new Head

function createNewHead(head, value) {
  let newHead = new Node(value, head, null);
  head.back = newHead;

  return newHead;
}

//insert before the tail
function insertNodeBeforeTail(head, val) {
  let tail = head;

  while (tail.next !== null) {
    tail = tail.next;
  }

  let prev = tail.back;
  let newNode = new Node(val, tail, prev);
  prev.next = newNode;
  tail.back = newNode;
  return head;
}

function insertNodeBeforeKElement(head, val, k) {
  if (k === 1) {
    return createNewHead(head, val);
  }
  let temp = head; // creating a copy of the head
  let count = 0;
  while (temp !== null) {
    count++;

    if (count === k) break;

    temp = temp.next;
  }

  let prev = temp.back;
  let newnode = new Node(val, temp, prev);
  prev.next = newnode;
  temp.back = newnode;

  return head;
}

function insertNodeBeforeAnynode(node, val) {
  let prev = node.back;
  let nNode = new Node(val, node, prev);
  prev.next = nNode;
  node.back = nNode;
  return prev;
}

function main() {
  let head = convertArrayToDoubleLinkList(array);

  console.log("insert before the Kth Element");
  let k = 2,
    value = 16;
  let nodeBeforeKEle = insertNodeBeforeKElement(head, value, k);
  print(nodeBeforeKEle);

  console.log(" Insert a node before the any other node apart from the head");
  let newNode = 30;
  head = insertNodeBeforeAnynode(head.next, newNode);
  print(head);
}

main();
