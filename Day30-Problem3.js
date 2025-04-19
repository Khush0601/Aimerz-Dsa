// reverse linked list using a recursive fun:
//step1:node class

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

//step2:recursive fun. to print in reverse:

function printreverse(head){
    if(head===null){
        return;
    }
    //recursive call:
    printreverse(head.next);
    //print after reaching end:-
    console.log(head.data)
}
//step3:create linked list:

let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
 
  console.log('original linked list');
  console.log('reverse print');
  printreverse(head);
