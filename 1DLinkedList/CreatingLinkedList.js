class Node {
  constructor(data1, next1 = null) {
    this.data = data1;
    this.next = next1;
  }
}

function convertArrayToLinkList(array) {
  let head = new Node(array[0]);
  let mover = head;

  for (let i = 1; i < array.length; i++) {
    let temp = new Node(array[i]);
    mover.next = temp;
    mover = temp; /// Go to the next
    // or mover = mover.nextSibling;
  }

  return head;
}

// Creating a new Node with the value from the array
let array = [2, 4, 3, 6];
//let y = new Node(array[2]); // This is the head of a linkedlist
// Printing the data stored in the Node
//console.log(y.data);

// Calling the convertArrayToLinkList function
let head = convertArrayToLinkList(array);

//Printing the content of the linked list

let currentNode = head;

while (currentNode !== null) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}

// Print the length of a linked list
function lengthOfLinkedList(head) {
  let count = 0;
  let tempNode = head;
  while (tempNode !== null) {
    tempNode = tempNode.next;
    count++;
  }

  return count;
}

console.log("=============================");
let length = lengthOfLinkedList(head);
console.log(length);

//Search if an element is present in a linked list

function checkIfElementPresentInLinkedList(head, value) {
  let currentNode = head;

  while (currentNode !== null) {
    if (currentNode.data === value) return true;
    currentNode = currentNode.next;
  }
  return false;
}
let value = 16;
let result = checkIfElementPresentInLinkedList(head, value);

if (result) {
  console.log("The element is present");
} else {
  console.log(" The element is NOT  present in a linked list");
}

// Time Complexity is O(N)
console.log("============= Removing head ==============");
//Remove Head from a Linked List

function deleteHeadFromLinkedList(head) {
  //let currentHead = head
  let tempNode = head;
  if (head === null) return null;
  head = head.next;
  // delete tempNode;
  tempNode = null;
  return head;
}
let res = deleteHeadFromLinkedList(head);

let currentHead = res;

while (currentHead !== null) {
  console.log(currentHead.data);
  currentHead = currentHead.next;
}

console.log("========= Delete a tail in a linked List =============");
//Delete the tail of a linked list
function deleteTailOfLinkedList(head) {
  // if the head given is null or it has only one element
  if (head === null || head.next === null) return null;

  //Now, for a tail to be deleted, the linkedList mush have at least
  // 2 elements
  let tempNode = head;
  while (tempNode.next.next !== null) {
    tempNode = tempNode.next;
  }

  // delete tempNode.next;
  tempNode.next = null;
  return head;
}

let headOfTailToDelete = deleteTailOfLinkedList(head);

let currentHeadOfTailToDelete = headOfTailToDelete;

while (currentHeadOfTailToDelete !== null) {
  console.log(currentHeadOfTailToDelete.data);
  currentHeadOfTailToDelete = currentHeadOfTailToDelete.next;
}

console.log(
  "============= Delete Kth Element of the linked List =============="
);
//Delete  Kth element of the link list

function deletKElementOfLinkedList(head, k) {
  if (head === null) return null;
  let tempNode = head;
  if (k === 1) {
    head = head.next;
    //delete tempNode
    tempNode = null;
    return head;
  }

  let count = 0,
    previous = null;

  while (tempNode !== null) {
    count++;
    if (count === k) {
      previous.next = previous.next.next;
      tempNode = null;
      break;
    }
    previous = tempNode;
    tempNode = tempNode.next;
  }

  return head;
}

let k = 2;
let deletKElement = deletKElementOfLinkedList(head, k);

let elementHeadNode = deletKElement;

while (elementHeadNode !== null) {
  console.log(elementHeadNode.data);
  elementHeadNode = elementHeadNode.next;
}

console.log(
  "=============== Delete an element based on Values ===================="
);

function deletValueElementOfLinkedList(head, value) {
  if (head === null) return null;
  let tempNode = head;
  if (head.data === value) {
    head = head.next;
    //delete tempNode
    tempNode = null;
    return head;
  }

  let previous = null;

  while (tempNode !== null) {
    if (tempNode.data === value) {
      previous.next = previous.next.next;
      tempNode = null;
      break;
    }
    previous = tempNode;
    tempNode = tempNode.next;
  }

  return head;
}

let val = 2;
let deletValueElement = deletValueElementOfLinkedList(head, val);

let elementHead = deletValueElement;

while (elementHead !== null) {
  console.log(elementHead.data);
  elementHead = elementHead.next;
}
console.log(head);
console.log("Insert Element into the head New Node");

//Insert Element into the linked List

function insertElementToLinkedList(head, newElement) {
  let tempNode = new Node(newElement, head);
  console.log(tempNode);
  //tempNode.next = head;
  return tempNode;
}
let newElement = 100;

let newInsertEl = insertElementToLinkedList(head, newElement);

let newNode = newInsertEl;

while (newNode !== null) {
  console.log(newNode.data);
  newNode = newNode.next;
}

console.log("Insert Element into the tail New Node");

//Insert Element into the linked List

function insertElementToTailLinkedList(head, newElement) {
  if (head === null) {
    return new Node(newElement);
  }

  let tempNode = head;

  while (tempNode.next !== null) {
    tempNode = tempNode.next;
  }

  let newNode = new Node(newElement);
  tempNode.next = newNode;
  return head;
}

let newElementTail = 200;
let newInsertElTail = insertElementToTailLinkedList(head, newElementTail);

let newNodes = newInsertElTail;

while (newNodes !== null) {
  console.log(newNodes.data);
  newNodes = newNodes.next;
}

console.log("=========== Insert Element Into the K Index ===========");
// Insert Element at the Kth index
function insertKElementToLinkedList(head, element, k) {
  if (head === null) {
    if (k === 1) {
      return new Node(element);
    } else {
      return head;
    }
  }

  if (k === 1) {
    return new Node(element, head);
  }

  let count = 0;
  let tempNode = head;
  while (tempNode !== null) {
    count++;
    if (count === k - 1) {
      let newNode = new Node(element);
      newNode.next = tempNode.next;
      tempNode.next = newNode;
      break;
    }
    tempNode = tempNode.next;
  }
  return head;
}

let x = 2;
let element = 10;

let kElement = insertKElementToLinkedList(head, element, x);

let kEle = kElement;

while (kEle !== null) {
  console.log(kEle.data);
  kEle = kEle.next;
}

console.log("=========== Insert Element before a Value ===========");
// Insert Element at the Kth index
function insertKElementToLinkedList(head, element, val) {
  if (head === null) {
    return null; // Cos, there will be no value when  head is null
  }

  if (head.data === val) {
    return new Node(element, head);
  }

  let tempNode = head;
  while (tempNode.next !== null) {
    if (tempNode.next.data === val) {
      // I passed tempNode.next as the next of the element
      // about to be created
      let newNode = new Node(element, tempNode.next);
      tempNode.next = newNode;
      break;
    }
    tempNode = tempNode.next;
  }
  return head;
}

let vall = 2;
let ele = 13;

let kElem = insertKElementToLinkedList(head, ele, vall);

let kEl = kElem;

while (kEl !== null) {
  console.log(kEl.data);
  kEl = kEl.next;
}

// Time complexity is O(N)
// Space complexity  is O(1)
