// Variable hoisting example
console.log(myVar); // Output: undefined (Hoisting in action)
myVar = 10; // Initialization before declaration

var myVar; // Declaration (Hoisted to the top)

console.log(myVar); // Output: 10