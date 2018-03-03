// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
   this.data = data;
   this.next = next || null;
  }
}


class LinkedList {
  contructor() {
    this.head = null;
  }
  
  insertFirst(data){
    if (!this.head) {
      this.head = new Node(data);
  } else {
    this.head = new Node(data, this.head)
    }
  }
  
  size() {
    var counter = 0;
    if (!this.head) return 0;
    var node = this.head;
    while(node) {
      node = node.next
      counter++;
    }
    return counter
  }
  
  getFirst() {
    return this.head;
  }
  
  getLast() {
    let node = this.head //starting point
    while (node) {
      if (node.next === null) return node
      node = node.next
    }
  }
  
  clear() {
    return this.head = null;
  }
  
  removeFirst(){
    this.head = this.head.next;
  }
  
  removeLast(){
    //edge case 1: if no element
    if (!this.head) return
    
    //edge case 2: if only one element that is head
    if (!this.head.next) {
      this.head = null;
      return;
    }
    //all other cases
    let previous = this.head;
    let node = previous.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
  
  insertLast(data) {
    if (!this.head)  {
      this.head = new Node(data) 
      return 
    }
    let node = this.head //starting point
    while (node) {
      if (node.next === null) {
        let lastNode = node;
        lastNode.next = new Node(data);
        return
      }
      node = node.next
    }
  }
  
  getAt(n) {
    if (!this.head) return null;
    let counter = -1;
    let nodeObj = {}
    let node = this.head;
    while(node) {
      counter++;
      nodeObj[counter] = node;
      node = node.next;
    }
    // if n = out of bound, return null
    return nodeObj[n] || null;
  }
  
  removeAt(n) {
   //element to be removed doesn't exist
    if (!this.getAt(n)) return 
    
    let previousNode = this.getAt(n-1);
    let nextNode = this.getAt(n+1);
    // case where a middle element to be removed
    if(previousNode && nextNode) previousNode.next = nextNode;
    
    //case where element to be removed is the last
    if(!nextNode) previousNode.next = null;
    
    //case where element to be removed is the first
    if (!previousNode) this.head = nextNode;
  }
  
  
  insertAt(data, n) {
    let newNode = new Node(data);

    //if no node exists, adds it as head
    if (!this.head) this.head = newNode

    //if only head exists
    if (!this.head.next) this.head.next = newNode;

    //if n=0
    if (n === 0) new Node(data, this.head)
    
    else {
    // if n = out of bound, then pick last element
    let previousNode = this.getAt(n-1) || this.getLast();
    newNode.next = previousNode.next 
    previousNode.next = newNode;
   }
 }
 
}


module.exports = { Node, LinkedList };
