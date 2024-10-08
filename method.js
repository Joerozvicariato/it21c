const person = {
   name: "Joeroz Vicariato",
   age: 20,
   status: "oks lang"
};

const art = {
   name: "Mona Lisa",
   type: "Painting",
   entry: "A001"
};

// Process and Output Art Information
const artInfoElement = document.getElementById('artInfo');
artInfoElement.textContent = `Art Registration Details
Name: ${art.name}
Type: ${art.type}
Entry No.: ${art.entry}
~~~~~~~~~~~~~~~~~~~~~~~~`;

// Class definition
class Person {
   constructor(name, age, status) {
       this.name = name;
       this.age = age;
       this.status = status;
   }

   // Method to display person information in the console
   displayInfo() {
       console.log("Name: " + this.name);
       console.log("Age: " + this.age);
       console.log("Status: " + this.status);
   }

   // Method to display person information in the HTML
   displayInfoHTML() {
       const personElement = document.getElementById('person1');
       personElement.innerHTML = `
           <strong>Name:</strong> ${this.name}<br>
           <strong>Age:</strong> ${this.age}<br>
           <strong>Status:</strong> ${this.status}
       `;
   }
}

// Creating an object (instance) of the Person class
const person1 = new Person(person.name, person.age, person.status);

// Calling methods
person1.displayInfo();
person1.displayInfoHTML();