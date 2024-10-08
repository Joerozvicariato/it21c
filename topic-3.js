class Person {
    #name;
    #age;
    #occupation;

    constructor(name, age, occupation) {
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
    }

    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get occupation() {
        return this.#occupation;
    }

    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
    }

    displayInfoHTML() {
        const personElement = document.getElementById('personOne');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Occupation:</strong> ${this.occupation}
        `;
    }
}

const personOne = new Person('Joeroz', 20, 'Student');
personOne.displayInfo();
personOne.displayInfoHTML();