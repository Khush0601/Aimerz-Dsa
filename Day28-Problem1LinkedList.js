// count the no. of occurences of a given key in the linked list

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

function countOccurence(head,key){
    let count=0;
    let current=head;
    while(current !== null){
        if(current.data===key){
            count++;
        }
        current=current.next;
    }
    return count;
}

let head=new Node(1);
head.next=new Node(2);
head.next.next=new Node(1);
head.next.next.next=new Node(2);
head.next.next.next.next=new Node(1);
head.next.next.next.next.next=new Node(3);
head.next.next.next.next.next.next=new Node(1);

console.log(countOccurence(head,1));
