class Person{
    //Private Fields
    #name;
    #age;
    #occupation;
    constructor(name, age, occupation){
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
    }
    //Getters
    get name(){
        return this.#name;
    }
   
}