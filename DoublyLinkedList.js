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
      console.log(
        "Sorry , you cannot do pop() because the linked list is empty"
      );
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
        "Sorry , you cannot do shift() because the linked list is empty"
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
      console.log(
        "sorry we can not give you the node value at index that you request because linked list is empty"
      );
    } else if (index < 0 || index > this.length - 1) {
      console.log("sorry your index out of number of nodes in linked list");
    } else {
      const pointer = this.head;
      let counter = 0;
      while (counter != index) {
        pointer = pointer.next;
        counter++;
      }
      return pointer.data;
    }
    return -1;
  }
  // The set method takes an index number and a value as parameters, and modifies the node value at the given index in the list
  set(index, val) {
    if (this.length === 0) {
      console.log(
        "sorry we can not assign value for node that is realted to index because linked list is empty"
      );
    } else if (index < 0 || index > this.length - 1) {
      console.log("sorry your index out of number of nodes in linked list");
    } else {
      const pointer = this.head;
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
      console.log("sorry your index should be 0 because linked list is empty");
      return false;
    } else if (index < 0 || index > this.length) {
      console.log("sorry your index should be between 0 and " + this.length);
      return false;
    }
    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      const node = new Node(val);
      const p1 = this.head;
      const p2 = this.head.next;
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
}
export default DoublyLinkedList;
