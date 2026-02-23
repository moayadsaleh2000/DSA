// =====================================
// Stack باستخدام Linked List
// =====================================
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
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

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return temp;
  }
}

function isBalanced(str) {
  const stack = new Stack();

  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      const top = stack.pop();
      if (!top || top.value !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

function reverseString(str) {
  const stack = new Stack();

  for (let char of str) {
    stack.push(char);
  }

  let reversed = "";
  while (stack.length > 0) {
    reversed += stack.pop().value;
  }
  return reversed;
}

console.log(isBalanced("({[]})"));
console.log(isBalanced("({[})"));
console.log(isBalanced("(([]){})"));
console.log(isBalanced("([{})]"));
console.log(reverseString("hello"));
