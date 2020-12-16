// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.


class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getName(){
        return this.name;
    }

    getId()

    getEmail()

    
    getRole () {
        return "Intern";
    }

    getSchool(){

    }

}

// example, change to role
const intern = new Intern(100, "sue@gmail.com", "susan", 100);
console.log(intern.getRole());


module.exports = Intern; 