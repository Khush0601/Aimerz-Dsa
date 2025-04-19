//quick sort on linked list
//step1:node class
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  

//steo2:fun. to print linked list:

function printList(head) {
    let current = head;
    let result = '';
    while (current!==null){
     result+= current.data + ' → ';
      current = current.next;
    }
    console.log(result + 'null');

    
  }

  //step3:fun. to get the tail of a linked list :

  function getTail(node){
    while(node!==null && node.next!==null){
        node=node.next;
    }
    return node;
  }

//step4:partition the last around the pivot :

function partition(head,end){
    let pivot=end;
    let prev=null;
    let curr=head;
    let tail=pivot;
    let newHead=null;
    let newEnd=pivot;

    while(curr!==pivot){
        let next=curr.next;
        if(curr.data<pivot.data){
            if(!newHead){
                newHead=curr;
                prev=curr;
                curr=next;
            }
            else{
                if(prev){
                    prev.next=curr.next;
                }
                else{
                    head=curr.next;
                }
                curr.next=null;
                tail.next=curr;
                tail=curr;
            }
            curr=next;
        }
        if(!newHead){
            newHead=pivot;
        }
        return {newHead,newEnd:tail,pivot};
    }
}

//step5:recursive quicksort fun:

function quickSortRec(head,end){
    if(!head ||head===end){
        return head;
    }
    let {newHead,newEnd,pivot}=partition(head,end);
    //sort the part before pivot:
    if(newHead!==pivot){
        let temp=newHead;
        while(temp.next!==pivot){
            temp=temp.next;
        }
        temp.next=null;
        newHead=quickSortRec(newHead,temp)
        //connect pivot back:
        let tail=getTail(newHead);
        tail.next=pivot;
    }
    //sort the part after pivot:
    pivot.next=quickSortRec(pivot.next,newEnd);
    return newHead;
}

//step6:main quicksort fun:

function quicksort(head){
    let end=getTail(head);
    return quickSortRec(head,end)
}

//step7:create linked list:
let head = new Node(30);
  head.next = new Node(3);
  head.next.next = new Node(4);
  head.next.next.next = new Node(20);
  head.next.next.next.next = new Node(5);

  console.log('original linked list')
  printList(head);




  //sort it:
  head=quicksort(head);
  console.log('sorting')
  printList(head);

