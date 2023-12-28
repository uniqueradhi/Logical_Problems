class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  isEmpty() {
    return this.front === null;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const data = this.front.data;
    this.front = this.front.next;

    if (this.front === null) {
      this.rear = null;
    }

    return data;
  }

  peek() {
    return this.isEmpty() ? null : this.front.data;
  }

  print() {
    let current = this.front;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const N = 15; 
const numbersQueue = new Queue();

for (let i = 1; i <= N; i++) {
  numbersQueue.enqueue(i);
}
console.log("Linked List for N numbers:");
numbersQueue.print();
