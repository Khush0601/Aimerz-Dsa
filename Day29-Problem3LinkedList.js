//Place Even Nodes Before Odd Nodes
//Rearrange a Linked List so that All Even Numbers Appear Before All Odd Numbers (Maintain Original Order)

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  

function rearrangeEvenOdd(head) {
    if (!head) {
        return null;
    }
  
    let evenHead = null, evenTail = null;
    let oddHead = null, oddTail = null;
  
    let current = head;
  
    while (current !== null) {
      if (current.data % 2 === 0) {
        // Even number
        if (evenHead === null) {
          evenHead = current;
          evenTail = current;
        } 
        else {
          evenTail.next = current;
          evenTail = evenTail.next;
        }
      } 
      else {
        // Odd number
        if (oddHead === null) {
          oddHead = current;
          oddTail = current;
        } else {
          oddTail.next = current;
          oddTail = oddTail.next;
        }
      }
      current = current.next;
    }
  
    // Join even list to odd list
    if (evenTail !== null) {
      evenTail.next = oddHead;
    }
  
    // End the final list properly
    if (oddTail !== null) {
      oddTail.next = null;
    }
  
    return evenHead !== null ? evenHead : oddHead;
  }
  
  
// Helper function to print list
function printList(head) {
    let current = head;
    let output = '';
    while (current) {
      output += current.data + ' → ';
      current = current.next;
    }
    console.log(output + 'null');
  }
  
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  
  let newHead = rearrangeEvenOdd(head);
  printList(newHead);
  
  