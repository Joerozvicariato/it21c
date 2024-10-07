const person ={
    name:"Joeroz Vicariato",
    age:20,
    status:"oks lang"
}

  //Process and Output
  console.log("Art Registration Details");
  console.log("Name: " + art.name);
  console.log("Type: "  +art.type);
  console.log("Entry No.: " + art.entry);  
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~");

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
     <strong>Occupation:</strong> ${this.status}
    `;
 }
}
// Creating an object (instance) of the Person class
const person1 = new Person('Xhinsade Riri', 20, 'Tired');
// Calling methods
personOne.displayInfo();    
