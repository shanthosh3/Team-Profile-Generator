const Employee = require('./Employee')
class Manager extends Employee {
    constructor(name, id, email, PhoneNumber){
        super(name, id, email);
        this.PhoneNumber = PhoneNumber;
    }

    getOfficeNumber(){
        return this.PhoneNumber;
    }
    getRole(){
        return 'Manager';
    }
};

module.exports = Manager;