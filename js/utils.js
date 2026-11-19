// ==================================================
// utils.js - reusable functions that work on student records
// ==================================================

// utils.js also imports from another module: the passing marks value lives in data.js
import { passingMarks } from "./data.js";

// Finds one student by ID. Returns the student, or undefined if there is no match
export function findStudentById(students, studentId) {
    return students.find((student) => student.studentId === studentId);
}

// Returns the average marks of all students
export function calculateAverageMarks(students) {
    let totalMarks = 0;

    students.forEach((student) => {
        totalMarks += student.marks;
    });

    return totalMarks / students.length;
}

// Returns the student with the highest marks
export function getTopStudent(students) {
    let topStudent = students[0];

    students.forEach((student) => {
        if (student.marks > topStudent.marks) {
            topStudent = student;
        }
    });

    return topStudent;
}

// Returns a new array with only the students above the given marks
export function getStudentsAbove(students, minimumMarks) {
    return students.filter((student) => student.marks > minimumMarks);
}

// Returns true if the student's marks reach the passing marks from data.js
export const hasPassed = (student) => student.marks >= passingMarks;

// Returns an object that counts the students in each course, like { "Web Development": 2 }
export function countStudentsByCourse(students) {
    const courseCounts = {};

    students.forEach(({ course: { courseName } }) => {
        // If the course is not in the object yet, start from 0, then add 1
        courseCounts[courseName] = (courseCounts[courseName] || 0) + 1;
    });

    return courseCounts;
}

// Returns a one-line summary of a student
export function formatStudentSummary({ name, studentId, marks, course: { courseName } }) {
    return name + " (ID " + studentId + ") - " + courseName + " - " + marks + " marks";
}
