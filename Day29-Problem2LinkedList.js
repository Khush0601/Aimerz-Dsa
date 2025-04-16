//given two lists sorted in increasing order, create and return a new list
//  representing the intersection of the two lists.The new list should be made with its own memory the original 
// lists should not be changed.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function findIntersection(list1, list2) {
  let dummy = new Node(0);  // A dummy node to start the new list
  let tail = dummy;         // This will build our new list

  let p1 = list1;
  let p2 = list2;

  while (p1 !== null && p2 !== null) {
    if (p1.data === p2.data) {
      tail.next = new Node(p1.data);  // Add to new list
      tail = tail.next;
      p1 = p1.next;
      p2 = p2.next;
    } else if (p1.data < p2.data) {
      p1 = p1.next;
    } else {
      p2 = p2.next;
    }
  }

  return dummy.next;
}

// Function to print the list (for checking)
function printList(head) {
  let temp = head;
  let output = '';
  while (temp !== null) {
    output += temp.data + ' → ';
    temp = temp.next;
  }
  console.log(output + 'null');
}

// Creating two sorted linked lists
let a = new Node(1);
a.next = new Node(2);
a.next.next = new Node(4);
a.next.next.next = new Node(6);

let b = new Node(2);
b.next = new Node(4);
b.next.next = new Node(6);
b.next.next.next = new Node(8);

let result = findIntersection(a, b);
printList(result);  // Output: 2 → 4 → 6 → null
