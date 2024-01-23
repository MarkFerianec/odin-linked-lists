class LinkedList {
  constructor(value) {
    this.firstNode = new Node(value);
  }

  append(value) {
    if (this.firstNode.nextNode === null) {
      this.firstNode.nextNode = new Node(value);
    } else {
      let temporary = this.firstNode;
      while (temporary.nextNode != null) {
        temporary = temporary.nextNode;
      }
      temporary.nextNode = new Node(value);
    }
  }

  prepend(value) {
    let prependedNode = new Node(value);
    prependedNode.nextNode = this.firstNode;
    this.firstNode = prependedNode;
  }

  size() {
    let numberOfNodes = 1;
    if (this.firstNode.nextNode === null) {
      return numberOfNodes;
    } else {
      let temporary = this.firstNode;
      while (temporary.nextNode != null) {
        temporary = temporary.nextNode;
        numberOfNodes += 1;
      }
      return numberOfNodes;
    }
  }

  head() {
    return this.firstNode;
  }

  tail() {
    let tail = this.firstNode;
    if (this.firstNode.nextNode === null) {
      return tail;
    } else {
      let temporary = this.firstNode;
      while (temporary.nextNode != null) {
        temporary = temporary.nextNode;
        tail = temporary;
      }
      return tail;
    }
  }

  at(index) {
    let counter = 1;
    let temporary = this.firstNode;
    while (counter < index) {
      temporary = temporary.nextNode;
      counter += 1;
    }
    return temporary;
  }

  pop() {
    let temporary = this.firstNode;
    while (temporary.nextNode.nextNode != null) {
      temporary = temporary.nextNode;
    }
    temporary.nextNode = null;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let myLinkedList = new LinkedList(1);

// console.log(myLinkedList);

myLinkedList.append(2);

// console.log(myLinkedList);

myLinkedList.append(3);

// console.log(myLinkedList);

myLinkedList.prepend('Banana');

// console.log(myLinkedList);

myLinkedList.prepend('Cherry');

console.log(myLinkedList);

// console.log(myLinkedList.size());

// console.log(myLinkedList.head());

// console.log(myLinkedList.tail());

// console.log(myLinkedList.at(3));

myLinkedList.pop();
myLinkedList.pop();

console.log(myLinkedList);
