//rearrange the linked list sucth that all even and odd positioned modes r together:

//step1:class node
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

//step2:function to rearrange:

function rearrange(head){
    if(!head || !head.next){
        return head;
    }
    let odd=head;
    let even=head.next;
    let evenstart=even;
    while(even && even.next){
        odd.next=even.next;
        odd=odd.next;
        even.next=odd.next;
        even=even.next;

    }
    odd.next=evenstart;
    return head;
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
let head = new Node(10);
head.next = new Node(22);
head.next.next = new Node(30);
head.next.next.next = new Node(43);
head.next.next.next.next = new Node(56);

console.log("original list");
printList(head);
head=rearrange(head)
console.log('list after rearranging even odd wise')
printList(head)
