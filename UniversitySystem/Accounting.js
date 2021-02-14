let University = require("./University.js");

class Accounting {
    constructor() {
        this.budget = 0;
    }

    income() {
        for(let faculty of University.faculties) {
            this.budget += faculty.rent * faculty.numberOfStudents;
        }
        return this.budget;
    }

    outcome() {
        for(let employee of University.employees) {
            this.budget -= employee.salary;
        }

        for(let faculty of University.faculties) {
            this.budget -= faculty.numberOfFreeSeats * 5000;
        }
    }

    countProfit() {
        this.income();
        this.outcome();
    }
}

module.exports = Accounting;