import Node from "./Node.js";
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // The push method takes a value as a parameter and assigns it as the tail of the list
  push(val) {
    let node = new Node(val);
    if (this.tail) {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
      return;
    }
    this.tail = node;
    this.head = this.tail;
    node.previous = this.head;
  }
  // The pop method removes the tail of the list
  pop() {
    if (this.tail) {
      if (this.tail == this.head) {
        this.tail.previous = null;
        this.head = null;
        this.tail = null;
        return;
      }
      let pointer = this.tail;
      this.tail = this.tail.previous;
      pointer.previous = null;
      this.tail.next = null;
    }
    console.log("Sorry , you cannot do pop() because the linked list is empty");
  }
  // The shift method removes the head of the list
  shift() {
    if (this.head) {
      if (this.head == this.tail) {
        this.tail.previous = null;
        this.head = null;
        this.tail = null;
        return;
      }
      this.head.previous = null;
      let pointer = this.head;
      this.head = this.head.next;
      pointer.next = null;
    }
    console.log("Sorry , you cannot do pop() because the linked list is empty");
  }
}
export default DoublyLinkedList;
