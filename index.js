class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    console.log(this.data[this.length]);
    this.length++;
    return this.length;
  }
  get(index) {
    return this.data[index];
  }
}

const newArray = new MyArray();
newArray.push("apple");
newArray.push("banana");
newArray.get(0);

console.log(newArray);
