// ==================================================
// main.js - the main file: imports the data and the functions, then displays the results
// ==================================================

// Default import: no { } and we choose the name
import students, { passingMarks } from "./data.js";

// Named imports: the names inside { } must match the names exported from utils.js
// "getTopStudent as findTopStudent" renames it for use in this file
import {
    findStudentById,
    calculateAverageMarks,
    getTopStudent as findTopStudent,
    getStudentsAbove,
    hasPassed,
    countStudentsByCourse,
    formatStudentSummary
} from "./utils.js";


console.log("===== All Students =====");
students.forEach((student) => {
    console.log(formatStudentSummary(student));
});

console.log("===== Summary =====");
console.log("Total students:", students.length);
console.log("Average marks:", calculateAverageMarks(students).toFixed(2));

const topStudent = findTopStudent(students);
console.log("Top student:", topStudent.name, "with", topStudent.marks, "marks");

console.log("===== Searching =====");
const studentWithId103 = findStudentById(students, 103);
console.log("Student with ID 103:", studentWithId103.name);

// find gives undefined when nobody matches, so we check before using the result
const studentWithId999 = findStudentById(students, 999);
if (studentWithId999) {
    console.log("Student with ID 999:", studentWithId999.name);
} else {
    console.log("No student with ID 999 was found.");
}

console.log("===== Filtering =====");
const studentsAbove70 = getStudentsAbove(students, 70);
console.log("Students above 70 marks:", studentsAbove70.map((student) => student.name));

const passedStudents = students.filter(hasPassed);
const failedStudents = students.filter((student) => !hasPassed(student));
console.log("Passing marks (from data.js):", passingMarks);
console.log("Passed:", passedStudents.map((student) => student.name));
console.log("Failed:", failedStudents.map((student) => student.name));

console.log("===== Students Per Course =====");
console.log(countStudentsByCourse(students));
