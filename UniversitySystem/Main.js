const Person = require('./Person.js');
const Employee = require('./Employee.js');
const Lecturer = require('./Lecturer.js');
const Student = require('./Student.js');
const Rector = require('./Rector.js');
const Accounting = require('./Accounting.js');
const Faculty = require('./Faculty.js');
const Subject = require('./Subject.js');
const University = require('./University.js');

let subject1 = new Subject("Mathematics", 8);
let subject2 = new Subject("Physics", 5);
let subject3 = new Subject("Math Logic", 5);

let faculty1 = new Faculty("Informatics and Applied Mathematics", 540000, 5000, 130);

let lecturer1 = new Lecturer("Armen", "Sargsyan", 45, 350000, "Docent", faculty1);
let lecturer2 = new Lecturer("Gagik", "Hunanyan", 55, 450000, "Professor", faculty1);
let lecturer3 = new Lecturer("Artur", "Qamalyan", 40, 350000, "Docent", faculty1);

lecturer1.addSubject(subject1);
lecturer2.addSubject(subject2);
lecturer3.addSubject(subject3);

let student1 = new Student("Samvel", "Khachatryan", 21, "IAM");

student1.addSubject(subject1);
student1.addSubject(subject2);
student1.addSubject(subject3);

lecturer1.toExam(subject1, student1);
lecturer2.toExam(subject2, student1);
lecturer3.toExam(subject3, student1);

student1.countAverageQualityGrade();

let accounting = new Accounting();


University.faculties.push(faculty1);
University.employees.push(lecturer1);
University.employees.push(lecturer2);
University.employees.push(lecturer3);


accounting.countProfit();
console.log(accounting);

console.log(student1);
