// Import the DoublyLinkedList class
import DoublyLinkedList from "./DoublyLinkedList.js";

// Create an instance of the doubly linked list
const list = new DoublyLinkedList();
console.log(`\n\nList after creating it:  ${list.print()}\n\n`);

// Test the push method
console.log(`Testing push...`);
list.push(10); // List: 10
list.push(20); // List: 10 <-> 20
list.push(30); // List: 10 <-> 20 <-> 30
console.log(`List after pushing operations:  ${list.print()}\n\n`);

// Test the pop method
console.log(`Testing pop...`);
list.pop(); // List: 10 <-> 20
console.log(`List after popping operation:  ${list.print()}\n\n`);

// Test the unshift method
console.log(`Testing unshift...`);
list.unshift(5); // List: 5 <-> 10 <-> 20
console.log(`List after unshifting operation:  ${list.print()}\n\n`);

// Test the shift method
console.log(`Testing shift...`);
list.shift(); // List: 10 <-> 20
console.log(`List after shifting operation:  ${list.print()}\n\n`);

// Test the get method
console.log(`Testing get...`);
console.log(`Element at index 1:  ${list.get(1)}\n\n`); // Should return 20

// Test the set method
console.log(`Testing set...`);
list.set(1, 25); // List: 10 <-> 25
console.log(`List after setting index 1 to 25:  ${list.print()}\n\n`);

// Test the insert method
console.log(`Testing insert...`);
list.insert(1, 15); // List: 10 <-> 15 <-> 25
console.log(`List after inserting 15 at index 1:  ${list.print()}\n\n`);

// Test remove method with edge cases

console.log(`Testing remove at index 1...`);
list.remove(1); // List: 10 <-> 25
console.log(`List after removing element at index 1:  ${list.print()}\n\n`);

console.log(`Testing remove at index 0 (removes the head)...`);
list.remove(0); // List: 25 (removing the head)
console.log(`List after removing element at index 0:  ${list.print()}\n\n`);

console.log(`Testing remove on a single-node list...`);
list.remove(0); // List should become empty
console.log(`List after removing the last element:  ${list.print()}\n\n`);

// Test edge case: removing from an empty list
console.log(`Testing remove on an empty list...`);
list.remove(0); // Should output that the list is empty
console.log(`\n\n`);
