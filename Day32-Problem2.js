//given head nd find whether its has loop or not,if it has then find the head if not return the no loop

//step1:node class
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

//step2:fun. to detect loop and return the start node of loop:

function detectloop(head){
    let slow=head;
    let fast=head;
    while(fast!==null && fast.next!==null){
        slow=slow.next;
        fast=fast.next.next;
        if(slow===fast){
            //find the start of loop
            slow=head;
            while(slow!==fast){
                slow=slow.next;
                fast=fast.next;
            }
            return slow;//starting of node;

        }
    }
    return "no loop"
}

//step3:create linked list:
//step4:linked list
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

//create loop:
head.next.next.next.next.next=head.next.next
let loopstart=detectloop(head);

if(loopstart==='No loop'){
    console.log(loopstart)
    
}
else{
    console.log("loop starts at node with value:",loopstart.data)
}