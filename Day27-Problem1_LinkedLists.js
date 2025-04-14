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