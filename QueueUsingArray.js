class Queue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.items.shift();
    }
    return null;
  }

  size() {
    return this.items.length;
  }
}

function reverse(arr) {
  const queue = new Queue();
  for (const element of arr) {
    queue.enqueue(element);
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = queue.dequeue();
  }
}
const arr = [1, 2, 3, 4, 5];

console.log("Original Array:", arr);

reverse(arr);

console.log("Reversed Array:", arr);
