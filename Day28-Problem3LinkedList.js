// given sorted Linkedlist and deletes any duplicates nodes from the list:

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
function removeDuplicates(head){
    let current=head;
    while(current && current.next){
        if(current.data === current.next.data){
            current.next=current.next.next;
        }
        else{
            current=current.next;
        }
    }
    return head;
}

function printList(head){
    let current=head;
    let result="";
    while(current){
        result+=current.data+" -> ";
        current=current.next;
    }
    console.log(result+"null")
}

//creation of linkedlist:

let head=new Node(1)
head.next=new Node(1);
head.next.next=new Node(3);
head.next.next.next=new Node(3);
head.next.next.next.next=new Node(45);
head.next.next.next.next.next=new Node(343);
head.next.next.next.next.next.next=new Node(344);

console.log("Before removing duplicates:");
printList(head);

head = removeDuplicates(head); 

console.log("After removing duplicates:");
printList(head);
