class Person{
    //Private Fields
    #name;
    #age;
    #gender;
    constructor(name, age, occupation){
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
}