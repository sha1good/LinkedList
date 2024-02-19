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

function deleteAllOccurrencesOfAKeyFromDoublyLinkedList(head, key) {
  let temp = head;
  while (temp !== null) {
    if (temp.data === key) {
      if (temp === head) {
        head = head.next;
      }
      let nextNode = temp.next;
      let prevNode = temp.back;

      if (nextNode) nextNode.back = prevNode;
      if (prevNode) prevNode.next = nextNode;
      //then, move temp forward to the next Node
      temp = nextNode; // Or temp = temp.next
    } else {
      temp = temp.next;
    }
  }

  return head; // return the updated head
}

function main() {
  const arr = [10, 4, 10, 10, 6, 10];
  // Convert the array to a doubly linked list
  let head = convertArrayToDoubleLinkList(arr);
  console.log("Doubly Linked List Initially:  ");
  print(head);
  let key = 10;
  let result = deleteAllOccurrencesOfAKeyFromDoublyLinkedList(head, key);
  console.log(
    " This is the printing the head after removing the All the Occurenrces "
  );
  print(result);
}

main();

// Time Complexity is O(N), Reason: The Loop runs through the length of the Doubly linkedlist
//Space Complexity is O(1)
