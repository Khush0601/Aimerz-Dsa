// rearrange the linked list in zig-zag pattern such that a < b > c < d > e ...:

//step1:class node
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  //step2:function zigzag:
  function zigzag(head) {
    if (!head || !head.next) return head;

    let current = head;
    let flag = true; 

    while (current.next) {
        if (flag) {
            if (current.data > current.next.data) {
                [current.data, current.next.data] = [current.next.data, current.data];
            }
        } else {
            if (current.data < current.next.data) {
                [current.data, current.next.data] = [current.next.data, current.data];
            }
        }
        flag = !flag;
        current = current.next;
    }

    return head;
}

  //step3:function to print:

function printList(head) {
    let current = head;
    let result = '';
    while (current){
     result+= current.data + ' → ';
      current = current.next;
    }
    console.log(result + 'null');
 }

 //step4:linked list
let head = new Node(10);
head.next = new Node(22);
head.next.next = new Node(30);
head.next.next.next = new Node(43);
head.next.next.next.next = new Node(56);

console.log("original list");
printList(head);
head=zigzag(head)
console.log('list after rearranging ')
printList(head)
