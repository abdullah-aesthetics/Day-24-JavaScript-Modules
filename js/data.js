// ==================================================
// data.js - the student dataset (data only, no logic)
// ==================================================

// Named export: other files import it using the same name inside { }
export const passingMarks = 50;

const students = [
    {
        name: "Ayesha",
        studentId: 101,
        age: 20,
        marks: 88,
        course: { courseName: "Web Development", instructor: "Dr. Imran", durationMonths: 6 },
        contact: { email: "ayesha@example.com", city: "Lahore" }
    },
    {
        name: "Bilal",
        studentId: 102,
        age: 21,
        marks: 65,
        course: { courseName: "Cyber Security", instructor: "Ms. Nadia", durationMonths: 8 }
    },
    {
        name: "Sara",
        studentId: 103,
        age: 19,
        marks: 92,
        course: { courseName: "Web Development", instructor: "Dr. Imran", durationMonths: 6 },
        contact: { email: "sara@example.com", city: "Karachi" }
    },
    {
        name: "Usman",
        studentId: 104,
        age: 22,
        marks: 54,
        course: { courseName: "Database Systems", instructor: "Mr. Farhan", durationMonths: 4 }
    },
    {
        name: "Hina",
        studentId: 105,
        age: 20,
        marks: 76,
        course: { courseName: "Cyber Security", instructor: "Ms. Nadia", durationMonths: 8 },
        contact: { email: "hina@example.com", city: "Islamabad" }
    },
    {
        name: "Daniyal",
        studentId: 106,
        age: 23,
        marks: 48,
        course: { courseName: "Database Systems", instructor: "Mr. Farhan", durationMonths: 4 }
    }
];

// Default export: a file can have only one. It is imported without { } and can be given any name
export default students;
