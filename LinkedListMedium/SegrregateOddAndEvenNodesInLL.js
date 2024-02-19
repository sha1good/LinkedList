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

function segrregateOddAndEvenNodesInLinkedList(head) {
  let array = [];
  let temp = head; // this is for the odd number

  // if only one data is given
  if (head === null || head.next === null) {
    return head;
  }
  while (temp !== null && temp.next !== null) {
    array.push(temp.data);
    temp = temp.next.next; // skip by two so that , it goes to the next odd index
  }
  //if there is temp and temp.next  is null... i.e  when we are considering odd length
  if (temp) {
    array.push(temp.data); // mannually push the temp data
  }

  temp = head.next; //  we are starting the even index from  head.next
  while (temp !== null && temp.next !== null) {
    array.push(temp.data);
    temp = temp.next.next;
  }

  if (temp) {
    array.push(temp.data);
  }
  // Now, we will have to traverse the entrire array list we created
  //and do data replacement in  our linked list
  temp = head;
  let i = 0;
  while (temp !== null) {
    temp.data = array[i];
    i++;
    temp = temp.next;
  }
  return head;
}

function segrregateOddAndEvenNodesInLinkedListOptimal(head) {
  if (head === null || head.next === null) return head;

  let odd = head,
    even = head.next,
    evenHead = head.next; //

  while (even !== null && even.next !== null) {
    odd.next = odd.next.next;
    even.next = even.next.next;

    // Now update odd to odd next and same for even

    odd = odd.next;
    even = even.next;

}
 // At the end, connect odd.next to evenHead
    odd.next = evenHead;
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
  let array = [1, 2, 3, 4, 5, 6];
  let head = convertArrayToLinkList(array);
  console.log("Convert the array 2 Linked List:   ");
  print(head);

  console.log("Printing the new head:   ");
  let newHead = segrregateOddAndEvenNodesInLinkedList(head);
  print(newHead);

  console.log("Printing the optimal solution:   ");
  let manHead = segrregateOddAndEvenNodesInLinkedListOptimal(head);
  print(manHead);
}

main();

//Time complexity of the brute force solution segrregateOddAndEvenNodesInLinkedList(head); is
// O(2N). Reason is that, the first iteration for the odd index is O(N/2) and second iteration
// is O(N/2) and the final iteration for transfering the data from array list  back to linkedlist
// O(N)
//Space complexity  is O(N): Reason is that we are using an external array to store our data

// Time complexity for the optimal solution is O(N) : Reason,  single traversal
// Space comlexity is O(1) // No space was used
