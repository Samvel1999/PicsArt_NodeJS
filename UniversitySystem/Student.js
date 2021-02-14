const Person = require('./Person.js');
const Subject = require('./Subject.js');

class Student extends Person {
    constructor(name, surname, age, faculty) {
        super(name, surname, age);
        this.faculty = faculty;
        this.averageQualityGrade = undefined;
        this.subjects = [];
    }

    addSubject(subject) {
        if(!subject instanceof Subject) {
            console.log("Wrong data");
            return;
        }

        this.subjects.push(subject);
    }

    removeSubject(subject) {
        if(!subject instanceof Subject) {
            console.log("Wrong data");
            return;
        }

        for(let i = 0; i < this.subjects.length; i++) {
            if(this.subjects[i] === subject) {
                this.subjects.splice(i, 1);
            }
        }
    }

    countAverageQualityGrade() {
        let sumOfMarks = 0;
        let sumOfCredits = 0;

        for(let sub of this.subjects) {
            sumOfMarks += sub.mark * sub.credit;
            sumOfCredits += sub.credit;
        }

        this.averageQualityGrade = sumOfMarks/sumOfCredits;
    }
}

module.exports = Student;