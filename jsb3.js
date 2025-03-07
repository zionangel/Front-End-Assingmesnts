// Object containing fruit names and their colors
let fruits = {
    Apple: "Red",
    Banana: "Yellow",
    Grape: "Purple",
    Mango: "Orange",
    Kiwi: "Green"
};

// Using for...in loop to iterate over object properties
console.log("Fruit Colors:");
for (let fruit in fruits) {
    console.log(fruit + " is " + fruits[fruit]);
}