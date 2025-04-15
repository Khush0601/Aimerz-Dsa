// write a function to swap el pairwise

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

function swapPairs(head){
    if(!head || !head.next){
        return head;
    }

    let newHead=head.next;
    let prev=null;
    let current=head;

    while(current && current.next){
        let nextPair=current.next.next;
        let second=current.next;
        //swap:

        second.next=current;
        current.next=nextPair;
        if(prev){
            prev.next=second;
        }

        //move forward

        prev=current;
        current=nextPair;
    }
    return newHead;
}


function printList(head){
    let current=head;
    let result="";
    while(current){
        result +=current.data+"->";
        current=current.next;
    }
console.log(result + "null")
}

//create linked list:

let head=new Node(1)
head.next=new Node(2);
head.next.next=new Node(3);
head.next.next.next=new Node(4);
head.next.next.next.next=new Node(5);

console.log("before swapping");
printList(head);
head=swapPairs(head);
console.log("after swapping pairwise");
printList(head)
