//find the mid node of linked list:
//step1:node class
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  //step2:fun. to find the middle node:

  function findMiddle(head){
    if(!head){
        return null;
    }
    let slow=head;
    let fast=head;
    while(fast!==null && fast.next!==null){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow
  }

  //step3:function to print list:

  function printList(head) {
    let current = head;
    let result = '';
    while (current!==null){
     result+= current.data + ' → ';
      current = current.next;
    }
    console.log(result + 'null');
 }

 //step4:linked list
 let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  
  console.log('original linked list');
  printList(head);

  //find and print middle node:
  let middle=findMiddle(head);
  console.log('middle node is:',middle.data);