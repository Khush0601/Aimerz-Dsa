// merge them 

//step1:node class

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

//step2:fun. to merge two lists into decreasing order:

function mergeInDecreasingOrder(head1,head2){
    let result=null;
    while(head1!==null && head2!==null){
        let temp;
        if(head1.data<head2.data){
            temp=head1;
            head1=head1.next;

        }
        else{
            temp=head2;
            head2=head2.next;
        }
        //insert at the beginning of result:
        temp.next=result;
        result=temp;
    }
    //if el. left in head1:
    while(head1!==null){
        let temp=head1;
        head1=head1.next;
        temp.next=result;
        result=temp;
    }
    // if el. left in head2:
    while(head2!==null){
        let temp=head2;
        head2=head2.next;
        temp.next=result;
        result=temp;
    }
    return result;
}

//step3:print linked list:
function printList(head) {
    let current = head;
    let result = '';
    while (current!==null){
     result+= current.data + ' → ';
      current = current.next;
    }
    console.log(result + 'null');
 }

//step4:create linked list
let head1 = new Node(1);
  head1.next = new Node(3);
  head1.next.next = new Node(5);
 
//step5:create second sorted list:
let head2 = new Node(2);
  head2.next = new Node(4);
  head2.next.next = new Node(6);

  console.log('list1')
  printList(head1);

  console.log('list1')
  printList(head2);

  let mergeHead=mergeInDecreasingOrder(head1,head2);

  console.log('merged in decreasing order')
  printList(mergeHead)
  