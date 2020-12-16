// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getName(){
        return this.name;
    }

    getId()

    getEmail()

    
    getRole () {
        return "Manager";
    }


}

// example, change to role
const manager = new Manager(100, "sue@gmail.com", "susan", 100);
console.log(manager.getRole());


module.exports = Manager; 