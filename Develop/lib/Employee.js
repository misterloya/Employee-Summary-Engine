// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email, officeNumber){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getRole () {
        return "Employee";
    }

}


module.exports = Employee; 