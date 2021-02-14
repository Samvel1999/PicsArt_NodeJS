const Employee = require('./Employee.js');
const University = require('./University.js');

class Rector extends Employee {
    constructor(name, surname, age, salary) {
        super(name, surname, age, salary);
    }

    raiseSalary(employee, money) {
        if(!employee instanceof Employee) {
            console.log("Wrong data");
            return;
        }

        employee.salary += money;
    }

    reduceSalary(employee, money) {
        if(!employee instanceof Employee) {
            console.log("Wrong data");
            return;
        }

        employee.salary -= money;
    }

    employ(employee) {
        University.employees.push(employee);
    }

    addFaculty(faculty) {
        University.faculties.push(faculty);
    }
}

module.exports = Rector;