// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let node = this.head;
    let size = 0;
    while (node) {
      node = node.next;
      size++;
    }
    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    //we can just simply set the head to null and it will be cleared

    //if we want to really clear all of them, we can do it like the following code
    if (!this.next) this.head = null;
    let node = this.head;
    let nextNode = node;
    while (nextNode) {
      nextNode = node.next;
      node.next = null;
      node = nextNode;
    }
  }

  removeFirst() {
    this.head = this.head.next || null;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    let next = current.next;

    while (next.next) {
      current = next;
      next = current.next;
    }

    current.next = null;
  }

  insertLast(data) {
    const node = new Node(data);
    const lastNode = this.getLast();
    if (lastNode) lastNode.next = node;
    else this.head = node;
  }

  getAt(index) {
    let node = this.head;
    let counter = 0;
    while (node) {
      if (counter == index) return node;
      node = node.next;
      counter++;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) return;
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    if (index == 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    const prevNode = this.getAt(index - 1) || this.getLast();

    node.next = prevNode.next;
    prevNode.next = node;
  }
}

module.exports = { Node, LinkedList };
