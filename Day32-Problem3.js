//add the two linked list and retunr the result

//step1:node class
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

//step2:fun. to add two linked list:
function addLinkedlist(l1,l2){
    let dummy=new Node(0);
    let current=dummy;
    let carry=0;
    while(l1!==null || l2!==null ||carry!==0){
        let sum=carry;
        if(l1!==null){
            sum+=l1.data;
            l1=l1.next;
        }
        if(l2!==null){
            sum+=l2.data;
            l2=l2.next;
        }
        carry=Math.floor(sum/10);
        let newNode=new Node(sum%10);
        current.next=newNode;
        current=current.next;
    }
    return dummy.next;
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

 //step4:create linked list:
 let l1=new Node(2)
 l1.next=new Node(4)
 l1.next.next=new Node(3)

 let l2=new Node(5)
 l2.next=new Node(6)
 l2.next.next=new Node(4)

 let result=addLinkedlist(l1,l2)
 printList(result)




