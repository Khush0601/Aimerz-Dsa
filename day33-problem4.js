// check the linked list of strings form a palindrome or not:

//step1:class node
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

//step2:function of addone:
function isPalindromeList(head){
    let current = head;
  let result = "";

  while (current) {
    result += current.data;
    current = current.next;
  }

  let reversed = result.split('').reverse().join('');
  return reversed === result;
}


//step3:function to print:

function printList(head) {
    let current = head;
    let result = '';
    while (current){
     result+= current.data + ' → ';
      current = current.next;
    }
    console.log(result + 'null');
 }

 //step4:linked list
let head = new Node("abc");
head.next = new Node("abc");
head.next.next = new Node("cba");
head.next.next.next = new Node("cba");



console.log("original list");
printList(head);

console.log(isPalindromeList(head))

