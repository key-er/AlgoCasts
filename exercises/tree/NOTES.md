# Tree and it's types

#### Tree Structure
- A tree has manys node.
- Every  node holds some data and reference to all of its children in an array[]. 
- A node has parent. Two nodes are siblings if they share one parent (not level)

#### Tree traversel
- There are two ways in which order a tree and iterate
  - Breadth First Traversal
  - Depth First Traversal - We get to depth of the tree first that is last node then back up to parent and down again and so on

##### Breadth First (BF) Traversal
- travserseBF() it takes a function as an argument and applies that to every node of the tree
- In BF we traverse every level one by one starting from the top..
- Why we care about the order? Think about a org chart of a company - CEO > CTO, CMO, CFO > VP Engineering.. You might want to print out a lits and go down and list hirarchical. First print out CEO, then all below etc. So 
- Algorthim - One possible way: we create an empty array and add root node to it. While there is an elem in this array, pull it out and put its children in array. Then call the callbackfunction on the pulled out elem and throw it away. Do this will all the elems of the array
- 


##### Depth First (DF) Traversal
- In DF we start from the top then the next level node and th children of it first..


