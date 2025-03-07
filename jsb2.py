// Array of fruits
let fruits = ["Apple", "Mango", "Banana", "Orange", "Grape"];

// Function to sort fruits in descending order
function sortFruits() {
    fruits.sort().reverse(); // Sorting and reversing the array
    document.getElementById("fruitList").textContent = fruits.join(", ");
}
