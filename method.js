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
}