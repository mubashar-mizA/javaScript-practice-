class CreateUser{

    constructor(fName,lName,age,email){
        this.firstName = fName
        this.lasttName = lName
        this.Age = age
        this.Email = email
    }
    
    getFullName (){
        return `${this.firstName} ${this.lastName}`
    }
    getBirthYear (){
        return new Date().getFullYear() - this.age
    }
}



const user1 = new CreateUser('Mubasahar', 'Siddique', 23, 'mubashar@23.com')
const user2 = new CreateUser('Sajid', 'Ahmed', 24, 'sajid@24.com')
