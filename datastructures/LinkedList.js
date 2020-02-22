class LinkedList {
  constructor(value = null) {
    if(value) {
      this.head = new Node(value);
      this.length = 1;
    } else {
      this.length = 0;
    }
  }

  push(value) {
    const node = new Node(value);
    if(!this.head) {
      this.head = node;
    } else if(!this.head.next) {
      this.head.next = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  get(index) {
    const node = this._find(index);
    if(node) {
      return node.value
    } else {
      return node;
    }
  }

  delete(index) {
    if(index >= this.length) {
      return false;
    }
    if(index === 0) {
      let removed = this.head;
      this.head = this.head.next;
      this.length--;
      return removed;
    }
    const prev = this._find(index - 1);
    if(prev) {
      if(prev.next) {
        let removed = prev.next;
        prev.next = prev.next.next;
        this.length--;
        return removed;
      }
    }
    return false;
  }
  pop() {
    this.tail = this._find(this.length - 2);
    const prevTail = this.tail.next;
    this.tail.next = null;
    this.length--;
    return prevTail.value;
  }
  print() {
    let current = this.head;
    while(current) {
      console.log(current.value);
      current = current.next;
    }
  }

  _find(index) {
    let count = 0;
    let currentNode = this.head;
    while(currentNode) {
      if(index === count) {
        return currentNode;
      } else {
        currentNode = currentNode.next;
      }
      count++;
    }

    return null;
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const list = new LinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);

list.print()
console.log('============================')
console.log(list.delete(4).value);
console.log('============================')
list.print()
/* console.log('============================')
console.log(list.delete(1).value);
console.log('============================')
list.print() */
// list.pop();
// list.print()