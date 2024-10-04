const person1 = {
    name: "Joeroz Vicariato",
    age: 20,
    occupation: "Student"
};

// Process and Output
console.log("Name: " + person1.name);
console.log("Age: " + person1.age);
console.log("Occupation: " + person1.occupation);

// Update HTML elements
document.getElementById("person1-name").textContent = "Name: " + person1.name;
document.getElementById("person1-age").textContent = "Age: " + person1.age;
document.getElementById("person1-occupation").textContent = "Occupation: " + person1.occupation;