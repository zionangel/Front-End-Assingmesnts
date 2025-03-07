// Function to be invoked
function showDetails(age, city) {
    console.log(this.name + " is " + age + " years old and lives in " + city);
}

// Object to bind the function
const person = { name: "Zion" };

// Using call()
showDetails.call(person, 20, "Hyderabad");

// Using apply()
showDetails.apply(person, [20, "Hyderabad"]);