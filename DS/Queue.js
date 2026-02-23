class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    if (value === undefined) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    }
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.head) return undefined;
    const temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
  min() {
    if (!this.head) return undefined;
    let min = this.head.value;
    let current = this.head.next;
    while (current) {
      if (current.value < min) {
        min = current.value;
      }
      current = current.next;
    }
    return min;
  }
}

let myQueue = new Queue(1);
console.log(myQueue);
