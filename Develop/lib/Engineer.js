// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer  extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getName(){
        return this.name;
    }

    getId()

    getEmail()

    
    getRole () {
        return "Engineer";
    }

    getGithub(){

    }


}

// example, change to role
const engineer = new Engineer(100, "sue@gmail.com", "susan", 100);
console.log(engineer.getRole());


module.exports = Engineer ; 
