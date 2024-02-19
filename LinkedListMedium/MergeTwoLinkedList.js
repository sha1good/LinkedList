class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function convertArrayToLinkList(array) {
  if (array.length === 0) return null;
  let head = new Node(array[0]);

  let mover = head;

  for (let i = 1; i < array.length; i++) {
    let temp = new Node(array[i]);
    mover.next = temp;
    mover = temp;
  }

  return head;
}

function mergeLinkedList(head1, head2) {
  let array = [];
  let temp1 = head1;
  let temp2 = head2;

  while (temp1 !== null) {
    array.push(temp1.data);
    temp1 = temp1.next;
  }

  while (temp2 !== null) {
    array.push(temp2.data);
    temp2 = temp2.next;
  }

  let newarray = array.sort((a, b) => a - b);
  let head = convertArrayToLinkList(newarray);
  return head;
}

function mergeLinkedListOptimized(head1, head2) {
  let dummyNode = new Node(-1);
  let current = dummyNode;

  while (head1 !== null && head2 !== null) {
    if (head1.data < head2.data) {
      current.next = head1;
      // current = head1;
      head1 = head1.next;
    } else {
      current.next = head2;
      // current = head2;
      head2 = head2.next;
    }
    current = current.next; // Move current to the next node
  }

  // Attach the remaining nodes of the non-empty list, if any
  if (head1 !== null) {
    current.next = head1;
  }
  if (head2 !== null) {
    current.next = head2;
  }

  return dummyNode.next; // Return the head of the merged list
}
function print(head) {
  while (head !== null) {
    console.log(head.data + " ");
    head = head.next;
  }

  console.log();
}

function main() {
  let array1 = [2, 4, 8, 10];
  let array2 = [1, 3, 3, 6, 11, 14];

  let head1 = convertArrayToLinkList(array1);
  let head2 = convertArrayToLinkList(array2);

  let mergList = mergeLinkedList(head, head2);
  let mergerList = mergeLinkedListOptimized(head1, head2);
  print(mergerList);
}

main();

// Time complexity for the brute force is O(3N) + NlogN
// Space complexity is O(N) + O(N) for the creating the array and also linked list as well

// Time Complexity of Optimal Approach is O(2N)
// Space complexity is O(1) , No space was used
