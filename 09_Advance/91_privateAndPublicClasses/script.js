console.log('Working');
class newUser {
    #firstName
    #lastName
    #age
    #email
    constructor(fName,lName,age,email){
        this.#firstName = fName
        this.#lastName = lName
        this.#firstName = fName
        this.#age = age
        this.#email = email
    }
    getFullName(){
        return `Full name of new user is ${this.#firstName} ${this.#lastName}`
    }
    getBirthYear(){
        return new Date().getFullYear() - this.age
    }
    getFullDetail(){
        return `User detail is as below 
        Name of user : ${this.#firstName} ${this.#lastName}
        Age of user : ${this.#age}
        Email of user : ${this.#email}
        `
    }
}
const user1 = new newUser('Mubashar', 'Siddique', 23, 'mubashar@23.com')
let a = {
    name:'alpha',
    '#age':23
}