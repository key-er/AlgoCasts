// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data){
    this.data = data;
    this.children = [];
  }
  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    // we will look at every child of current node
    this.children = this.children.filter((node) => {
      return node.data !== data;
    }); 
  }
}

class Tree {
  constructor() {
    this.root = null; //assigning a root property; in linkedIn we had this.head prop
  }
  
  traverseBF(func) {
    // 1- The array starts with first/root node
    const arr = [this.root]
    // As long as there are nodes in the array
    while (arr.length) {
      // 2- take out the first element from the array
      const node = arr.shift();
      // 3- Push it's children to the 'end' of the array
      arr.push(...node.children);
       //Note: children is array so if we do "arr.push(node.children)".
	  //It means we are pushing array to an array. So using spread operator here 
      // 4- Apply the function on the node that was pulled out in step 2
      func(node)
    }
    return
  }

  traverseDF(func) {
    // 1- The array start with first/root node
    const arr = [this.root]
    // As long as there are nodes in this array
    while (arr.length) {
      //  2- take out the last last element of the array
      const node = arr.shift()
      // 3- Push its children to the 'start' of  arr. Here it differs from BF algo
      arr.unshift(...node.children)
      // 4- Apply the function on the node that was pulled out in step 2
      func(node)
    }
    return
  }
}

module.exports = { Tree, Node };
