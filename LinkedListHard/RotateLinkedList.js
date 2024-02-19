// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:

// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109

// Solution: Brute Force

// Approach:

// We have to move the last element to first for each k.

// For each k, find the last element from the list. Move it to the first.


// Solution: Optimal Solution

// Approach:

// Let’s take an example. 

// head = [1,2,3,4,5] k = 2000000000

// If we see a brute force approach, it will take O(5*2000000000) which is not a good time complexity when we can optimize it.

// We can see that for every k which is multiple of the length of the list, we get back the original list. Try to operate brute force on any linked list for k as a multiple of the length of the list.

// This gives us a hint that for k greater than the length of the list, we have to rotate the list for k%length of the list. This reduces our time complexity.

// Steps to the algorithm:-

// Calculate the length of the list.
// Connect the last node to the first node, converting it to a circular linked list.
// Iterate to cut the link of the last node and start a node of k%length of the list rotated list.
// Dry Run:

// Let’s calculate the length of the list by iterating on it until it reaches null and increasing the count. Once the length is calculated we will connect the last node to the first node.




// Now, the length of the list is 5 and k is 2. k is less than the length of the given list. So, we will have the head of the rotating list at the kth element from the end remove the link from the length-k node from its next node and make it NULL.


// Thus, we received our desired output.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertNode(head, data) {
  let newNode = new Node(data);
  if (head === null) {
    head = newNode;
  } else {
    let current = head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
  return head;
}

function rotateRight(head, k) {
  if (head === null || head.next === null) return head;
  for (let i = 0; i < k; i++) {
    let temp = head;

    while (temp.next.next !== null) {
      temp = temp.next;
    }
    let end = temp.next;
    temp.next = null;
    end.next = head;
    head = end;
  }
  return head;
}


function rotateRightOptimalSolution(head, k){
    if(head === null || head.next === null || k=== 0) return head

    //calculating length
     let temp = head
     let length = 1

     while(temp.next !== null){
      length++
        temp = temp.next
     }

      //link last node to first node
      temp.next = head;
      k = k % length; //when k is more than length of list
      let  end = length - k //to get end of the list
      while(end-- > 0) temp = temp.next
       //breaking last node link and pointing to NULL
       head = temp.next
       temp.next = null
       return head;
}
function printList(head) {
  let current = head;
  while (current !== null) {
    process.stdout.write(current.data + " ");
    current = current.next;
  }
  process.stdout.write("\n");
}

function main() {
  let head = null;
  // Inserting Nodes
  head = insertNode(head, 1);
  head = insertNode(head, 2);
  head = insertNode(head, 3);
  head = insertNode(head, 4);
  head = insertNode(head, 5);

  process.stdout.write("Original list: ");
  printList(head);

  let k = 2;
  //let newHead = rotateRight(head, k);
    let newHead = rotateRightOptimalSolution(head, k)

  process.stdout.write("After " + k + " iterations: ");
  printList(newHead);
}

main();

// Time Complexity: O(length of list) + O(length of list – (length of list%k))

// Reason: O(length of the list) for calculating the length of the list. O(length of the list – (length of list%k)) for breaking link.

// Space Complexity: O(1)

// Reason: No extra data structure is used for computation.
