class Person{
    //Private Fields
    #name;
    #age;
    #gender;
    constructor(name, age, gender){
        this.#name = name;
        this.#age = age;
        this.#gender = gender;
    }
    //Getters
    get name(){
        return this.#name;
    }
    get age(){
        return this.#age;
    }
    get gender(){
        return this.#gender;
    }
    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("gender: " + this.gender);
    }
    // Method to display person information in the HTML
    displayInfoHTML() {
        const personElement = document.getElementById('personOne');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Occupation:</strong> ${this.gender}
        `;
    }
}
