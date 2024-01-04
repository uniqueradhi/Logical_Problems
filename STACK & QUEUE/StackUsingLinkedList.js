class Node {
  constructor(data) 
  {
    this.data = data;
    this.next = null;
  }
}

class LinkedList 
{
  constructor() 
  {
    this.head = null;
  }

  append(data)
   {
    const newNode = new Node(data);
    if (!this.head)
     {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next)
   {
      current = current.next;
    }

    current.next = newNode;
  }

  sort()
   {
    if (!this.head || !this.head.next) 
    {
      return; 
    }

    let swapped;
    do {
      swapped = false;
      let current = this.head;
      let prev = null;

      while (current.next) 
      {
        if (current.data > current.next.data) 
        {
          const temp = current.data;
          current.data = current.next.data;
          current.next.data = temp;
          swapped = true;
        }
        prev = current;
        current = current.next;
      }
    } while (swapped);
  }

  display() {
    let current = this.head;
    while (current) 
    {
      console.log(current.data);
      current = current.next;
    }
  }
}
const linkedList = new LinkedList();
linkedList.append(5);
linkedList.append(2);
linkedList.append(8);
linkedList.append(1);

console.log("Before Sorting:");
linkedList.display();

linkedList.sort();

console.log("After sorting:");
linkedList.display();
