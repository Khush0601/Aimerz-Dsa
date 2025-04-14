// LinkedLists
// traverse the linked list

class listNode{
    #data;
    #next;

    constructor(data){
        this.#data=data;
        this.#next=null;
    }

    get data(){
        return this.#data;
    }

    set data(data){
       this.#data=data;
    }

    get next(){
        return this.#next;
    }

    set next(node){
       this.#next=node;
    }
}

// create a linkedList:

let head=new listNode(3);
head.next=new listNode(5);
head.next.next=new listNode(9);
head.next.next.next=new listNode(11);

// print the linkedlist:

function traverse(head){
    while(head){
        process.stdout.write(head.data+" -> ")
        head=head.next
    }
    console.log()
}
traverse(head)

// traversal by recursion

function traverse_rec(head){
    //base condition
    if(!head){
        return ;
    }
    process.stdout.write(head.data+" -> ")
    traverse_rec(head.next)
}
traverse_rec(head)

// length of linkedList:

function len(head){
    let len=0;
    let temp=head;
    while(temp){
      len++;
      temp=temp.next;
    }
    return len;
}
console.log(len(head)); 

// length by recursion
function len_rec(head){
    if(!head){
        return 0;
    }
    return 1+len_rec(head.next)
    // return !head? 0:1+len_rec(head.next)
}
console.log(len_rec(head))

// insertition 
function insertionAtHead(head,num){
    //create the listNode for the num
    let node=new listNode(num);

    //set next of node as the head:
    node.next=head;
    return node;
}
traverse(insertionAtHead(head,19))
