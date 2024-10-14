// Import the Node class
import Node from "./Node.js";

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // The push method takes a value as a parameter and assigns it as the tail of the list
  push(val) {
    const node = new Node(val);
    this.length++;
    if (this.tail) {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
      return;
    }
    this.tail = node;
    this.head = node;
  }
  // The pop method removes the tail of the list
  pop() {
    if (this.length !== 0) {
      this.length--;
      if (this.tail === this.head) {
        this.head = null;
        this.tail = null;
        return;
      }
      const pointer = this.tail;
      this.tail = this.tail.previous;
      pointer.previous = null;
      this.tail.next = null;
    } else {
      console.log("Sorry, you can't do pop() because the linked list is empty");
    }
  }
  // The shift method removes the head of the list
  shift() {
    if (this.length !== 0) {
      this.length--;
      if (this.head == this.tail) {
        this.head = null;
        this.tail = null;
        return;
      }
      const pointer = this.head;
      this.head = this.head.next;
      pointer.next = null;
      this.head.previous = null;
    } else {
      console.log(
        "Sorry, you can't do shift() because the linked list is empty"
      );
    }
  }
  // The unshift method takes a value as a parameter and assigns it as the head of the list
  unshift(value) {
    const node = new Node(value);
    this.length++;
    if (this.head) {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
      return;
    }
    this.head = node;
    this.tail = node;
  }
  // The get method takes an index number as a parameter and returns the value of the node at that index
  get(index) {
    if (this.length === 0) {
      console.log("Sorry, you can't do get() because the linked list is empty");
    } else if (index < 0 || index > this.length - 1) {
      console.log(
        `Sorry, you can't do get() because the index of the node that you requested should be in the range [0-${
          this.length - 1
        }]`
      );
    } else {
      let pointer = this.head;
      let counter = 0;
      while (counter != index) {
        pointer = pointer.next;
        counter++;
      }
      return pointer.data;
    }
  }
  // The set method takes an index number and a value as parameters, and modifies the node value at the given index in the list
  set(index, val) {
    if (this.length === 0) {
      console.log("Sorry, you can't do set() because the linked list is empty");
    } else if (index < 0 || index > this.length - 1) {
      console.log(
        `Sorry, you can't do set() because the index of the node that you requested should be in the range [0-${
          this.length - 1
        }]`
      );
    } else {
      let pointer = this.head;
      let counter = 0;
      while (counter != index) {
        pointer = pointer.next;
        counter++;
      }
      pointer.data = val;
    }
  }
  // The insert method takes an index number and a value as parameters, and inserts the value at the given index in the list. It returns true on successful insert or false
  insert(index, val) {
    if (this.length === 0) {
      if (index === 0) {
        this.unshift(val);
        return true;
      }
      console.log(
        "Sorry, you can't do insert() with an index that isn't equal to 0 because the linked list is empty"
      );
      return false;
    } else if (index < 0 || index > this.length) {
      console.log(
        `Sorry, you can't do insert() because the index of the node that you requested should be in the range [0-${this.length}]`
      );
      return false;
    }
    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      const node = new Node(val);
      let p1 = this.head;
      let p2 = this.head.next;
      let counter = 0;
      while (counter != index - 1) {
        p1 = p2;
        p2 = p2.next;
        counter++;
      }
      node.next = p2;
      node.previous = p1;
      p1.next = node;
      p2.previous = node;
    }
    return true;
  }
  // The remove method takes an index number as a parameter and removes the node at the given index in the list
  remove(index) {
    if (this.length === 0) {
      console.log(
        "Sorry, you can't do remove() because the linked list is empty"
      );
    } else if (index < 0 || index > this.length - 1) {
      console.log(
        `Sorry, you can't do remove() because the index of the node that you requested should be in the range [0-${
          this.length - 1
        }]`
      );
    } else {
      if (index === 0) {
        this.shift();
      } else if (index === this.length - 1) {
        this.pop();
      } else {
        let p1 = this.head;
        let p2 = this.head.next;
        let counter = 0;
        while (counter != index - 1) {
          p1 = p2;
          p2 = p2.next;
          counter++;
        }
        p1.next = p2.next;
        p2.next.previous = p1;
        p2.next = null;
        p2.previous = null;
      }
    }
  }
  // The print method to display linked list
  print() {
    let list = "";
    let pointer = this.head;
    while (pointer) {
      if (pointer.next) {
        list += pointer.data + " <-> ";
      } else {
        list += pointer.data;
      }
      pointer = pointer.next;
    }
    return list;
  }
}
// Export the DoublyLinkedList class
export default DoublyLinkedList;
