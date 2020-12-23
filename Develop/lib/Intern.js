// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const employee = require ("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    
    getRole () {
        return "Intern";
    }

    getSchool(){
        return this.school;
    }

}

// example, change to role
const intern = new Intern(100, "sue@gmail.com", "susan", 100);
console.log(intern.getRole());


module.exports = Intern; 