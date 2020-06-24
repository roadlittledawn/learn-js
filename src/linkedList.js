// Source: https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/

// const list = {
//   head: {
//     value: 6,
//     next: {
//       value: 10,                                          
//       next: {
//         value: 12,
//         next: {
//           value: 3,
//           next: null	
//         }
//       }
//     }
//   }
// }

// console.log(list.head.value)

class ListNode {
  constructor(data) {
      this.data = data
      this.next = null                
  }
}

class LinkedList {
  constructor(head = null) {
      this.head = head
  }
  size() {
    let count = 0; 
    let node = this.head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    return lastNode
  }

  getFirst() {
    return this.head;
  }

}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

let list = new LinkedList(node1)
console.log(list.getFirst())



// From PLG interview exercise

class Node { 
  constructor(data, next = null) { 
    this.data = data; 
    this.next = next;
  } 
}

class LinkedList { 
  constructor(head = null) { 
    this.head = head; 
  }
  
  
  // Last in (insert)
  
  // Add 2
  insert(data) {
    let newNode = new Node(data); //node (2)
    newNode.next = this.head; //node.next = node(1)
    this.head = newNode; //head = node (2)
  }
  
  // First out
  // function here 
  remove() {
    // Head node(2)
    // Remove node(2) we would want head to be node(1)
    this.head = this.head.next;
  }
  
  removeMiddle() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next
    }
    node = this.head;
    for (let i = 1; i < Math.ceil(count/2); i++) {
      node = node.next;
    }
    console.log(node.data); // node 4
    console.log(node.next.next.data); // node 2
    if (node.next.next === null) {
      
    }
    if (node.next.next) {
      
    }
    
    // 1 2 3 4 5
    //     ^
    //         ^
 
    
  }
  
  printList() {
    let currNode = this.head;
    console.log('LinkedList: ');
    
    while (currNode != null) {
      console.log(currNode.data);
      currNode = currNode.next;
    }
  }
} 


let list = new LinkedList();
         
list.insert(1);
list.insert(2); // This node this.next would be what? 
list.insert(3);
list.insert(4);
list.insert(5);

//list.remove();
// 3 2 1

list.removeMiddle();
         
list.printList();

