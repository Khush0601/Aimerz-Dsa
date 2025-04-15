//linkedList for checking palindrome or not:

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

function isPalindrome(head){
    let arr=[];
    let current=head;
    while(current){
        arr.push(current.data);
        current=current.next;
    }
    let left=0;
    let right=arr.length-1;
    while(left<right){
        if(arr[left]!==arr[right]){
            return false
        }
        left++;
        right--;
    }
    return true;
}

//creation of linkedlist:

let head=new Node('r')
head.next=new Node('t')
head.next.next=new Node('a')
head.next.next.next=new Node('p')
head.next.next.next.next=new Node('a')
head.next.next.next.next.next=new Node('s')
head.next.next.next.next.next.next=new Node('r')

console.log(isPalindrome(head));
