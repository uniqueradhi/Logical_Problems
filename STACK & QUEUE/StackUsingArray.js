class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (!this.isEmpty()) {
      return this.items.pop();
    }
    return null;
  }

  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    }
    return null;
  }
  size() {
    return this.items.length;
  }
}

function countOccurrences(arr) {
  const stack = new Stack();
  const occurrences = {};
  for (const element of arr) {
    stack.push(element);
    occurrences[element] = (occurrences[element] || 0) + 1;
  }
  for (const key in occurrences) {
    console.log(`${key}: ${occurrences[key]} `);
  }
}
const arr = [1, 3, 2, 4, 1, 5, 2, 4];

console.log("Occurrences in the array:");
countOccurrences(arr);


