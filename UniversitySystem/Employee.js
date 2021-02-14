const Person = require('./Person.js')

class Employee extends Person {
    constructor(name, surname, age, salary) {
        super(name, surname, age);
        this.salary = salary;
    }
}

module.exports = Employee;