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
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let myLinkedList = new LinkedList(1);

console.log(myLinkedList);

myLinkedList.append(2);

console.log(myLinkedList);

myLinkedList.append(3);

console.log(myLinkedList);

myLinkedList.append(4);

console.log(myLinkedList);