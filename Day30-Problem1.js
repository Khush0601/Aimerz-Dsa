// linked list questions
// write a fun. that moves the last el. to the front in a given liknked list:
//step1:node class:
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
//steo2:fun. to print linked list:

function printList(head) {
    let current = head;
    let result = '';
    while (current!==null){
     result+= current.data + ' → ';
      current = current.next;
    }
    console.log(result + 'null');
  }

//step3:fun. that moves last el to front:
function moveLastToFront(head){
    if(head===null || head.next===null){
        return head;
    }
    let secondLast=null;
    let last=head;

    while(last.next!==null){
        secondLast=last;
        last=last.next;
    }
    secondLast.next=null;
    last.next=head;
    head=last;
    return head;
}

//step4:create linked list:
  let head = new Node(10);
  head.next = new Node(20);
  head.next.next = new Node(30);
  head.next.next.next = new Node(40);
  
  console.log('original linked list')
  printList(head);

  console.log('after moving last to front ')
  printList(head);

