class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.tail) return undefined;
    let temp = this.tail;
    const poppedValue = temp.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
    }
    this.length--;
    return poppedValue;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    const shiftedValue = temp.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
    }
    this.length--;
    return shiftedValue;
  }
  reverse() {
    if (!this.head) return undefined;
    let current = this.head;
    let temp = null;
    while (current) {
      temp = current.next;
      current.next = current.prev;
      current.prev = temp;
      current = temp;
    }
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }
}

let myDLinkedList = new DLinkedList(1);
myDLinkedList.push(2);
