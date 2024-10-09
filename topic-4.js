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
    get occupation(){
        return this.#gender;
    }
    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
    }
}