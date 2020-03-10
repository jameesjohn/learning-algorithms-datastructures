class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const item = new Node(value);
    if(this.root === null) {
      this.root = item;
      return;
    }
    let currentNode = this.root;
    while(currentNode) {
      if((value > currentNode.value) && (currentNode.right === null)) {
        currentNode.right = item;
        return;
      }
      if((value < currentNode.value) && (currentNode.left === null)) {
        currentNode.left = item;
        return;
      }

      if(value >= currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
  }
  toObject() {
    return this.root;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


const bst = new Tree()

bst.add(10)
bst.add(7)
bst.add(13)
bst.add(11)

console.log(bst.toObject());