// removeDuplicates from the linkedList which r not sorted:

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

function removeDuplicates(head){
    if(!head){
        return null;
    }

    let seen=new Set();
    let current=head;
    let prev=null;
    while(current){
        if(seen.has(current.data)){
            prev.next=current.next;
        }
        else{
            seen.add(current.data);
            prev=current;
        }
        current=current.next;
    }
    return head;
}

function printList(head){
    let current=head;
    let result="";
    while(current){
        result+=current.data+ " -> ";
        current=current.next;
    }
    console.log(result+"null")
}

let head=new Node(1)
head.next=new Node(123);
head.next.next=new Node(33);
head.next.next.next=new Node(33);
head.next.next.next.next=new Node(45);
head.next.next.next.next.next=new Node(343);
head.next.next.next.next.next.next=new Node(45);

printList(head);
head=removeDuplicates(head)
console.log('after removing duplicates')
printList(head)