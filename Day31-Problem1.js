//reverse the pair of k:
//step1:class node
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  //step2:fun.to reverse in gropus of k:
  function reverseIngroups(head,k){
    if(!head || k<=1){
        return head;
    }
    let current=head;
    let prev=null;
    let next=null;
    let count=0;
    //step1:check if there r at least k nodes:
    let temp=head;
    let nodeCount=0;
    while(temp && nodeCount<k){
        temp=temp.next;
        nodeCount++;
    }
    if(nodeCount <k){
        return head;

    }
    //step2:reverse first k nodes:
    current=head;
    while(count<k && current!==null){
        next=current.next;
        current.next=prev;
        prev=current;
        current=next;
        count++;
    }
    //step3:recur for the remaining list:
    if(next!==null){
        head.next=reverseIngroups(next,k);
    }
    return prev;
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
  head.next.next.next.next.next= new Node(6);
 
  //before reverse:
  console.log('original linked list');
  printList(head);

  //reverse in pairs:
  let k=3;
  let newHead=reverseIngroups(head,k)

  //after reverse:
  console.log(`reversed in groupsof ${k}`);
  printList(newHead)
