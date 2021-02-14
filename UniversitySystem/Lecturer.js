const Employee = require('./Employee.js');
const Subject = require('./Subject.js');
const Student = require('./Student.js');

class Lecturer extends Employee {
    constructor(name, surname, age, salary, academicalLevel, faculty) {
        super(name, surname, age, salary);
        this.academicalLevel = academicalLevel;
        this.faculty = faculty;
        this.subjects = [];
    }

    addSubject(subject) {
        if(!subject instanceof Subject){
            console.log("Wrong data");
            return;
        }

        this.subjects.push(subject);
    }

    toExam(subject, student) {
        if(!subject instanceof Subject || !student instanceof Student) {
            console.log("Wrong data");
            return;
        }

        let lecturerCorrespondsToSubject = false;

        for(let i = 0; i < this.subjects.length; i++) {
            if(this.subjects[i] === subject) {
                lecturerCorrespondsToSubject = true;
            }
        }

        if(!lecturerCorrespondsToSubject) {
            console.log("The lecturer does not teach this subject.")
            return;
        }

        subject.mark = Math.floor(Math.random() * (20 - 8) + 8);
    }
}

module.exports = Lecturer;