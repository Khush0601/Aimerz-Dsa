// Step 1: Class Node
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Step 2: Function to insert a node in sorted order
  function sortedInsert(sortedHead, node) {
    if (!sortedHead || node.data < sortedHead.data) {
      node.next = sortedHead;
      return node;
    }
    
  
    let current = sortedHead;
    while (current.next && current.next.data < node.data) {
      current = current.next;
    }
  
    node.next = current.next;
    current.next = node;
  
    return sortedHead;
  }
  
  // Step 3: Function to sort the linked list
  function sortLinkedlist(head) {
    let sorted = null;
    let current = head;
  
    while (current) {
      let next = current.next;
      current.next = null;
      sorted = sortedInsert(sorted, current);
      current = next;
    }
  
    return sorted;
  }
  
  // Step 4: Print function
  function print(head) {
    let result = [];
    while (head) {
      result.push(head.data);
      head = head.next;
    }
    console.log(result.join(" -> "));
  }
  
  // Step 5: Linked List
  let head = new Node(1);
  head.next = new Node(-3);
  head.next.next = new Node(22);
  head.next.next.next = new Node(-43);
  head.next.next.next.next = new Node(0);
  
  console.log("Original list:");
  print(head);
  
  head = sortLinkedlist(head);
  
  console.log("List after sorting by actual values:");
  print(head);
  