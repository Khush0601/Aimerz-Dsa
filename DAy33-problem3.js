//add 1 to a number represented as linked list:

//step1:class node
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

//step2:function to reverse:

function reverseList(head) {
    let prev = null;
    let current = head;
    while (current) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    return prev;
}

//step3:function to add one:

function addOne(head) {
    head = reverseList(head);
    let current = head;
    let carry = 1;

    while (current && carry > 0) {
        let sum = current.data + carry;
        current.data = sum % 10;
        carry = Math.floor(sum / 10);

        if (!current.next && carry > 0) {
            current.next = new Node(0);
        }

        current = current.next;
    }

    return reverseList(head);
}

 //step4:function to print:

 function printList(head) {
    let current = head;
    let result = '';
    while (current){
     result+= current.data + ' → ';
      current = current.next;
    }
    console.log(result + 'null');
 }

 //step5:linked list
let head = new Node(1);
head.next = new Node(9);
head.next.next = new Node(9);


console.log("original list");
printList(head);
head=addOne(head)
console.log('list after rearranging ')
printList(head)
