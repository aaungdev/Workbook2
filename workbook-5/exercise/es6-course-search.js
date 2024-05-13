"use strict";

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

// When does the PROG200 course start?
let startDatePROG200 = courses.find(function(course) {
  return course.CourseId == "PROG200";
}).StartDate;
console.log('Start Date of PROG200:', startDatePROG200);

// What is the title of the PROJ500 course?
let titlePROJ500 = courses.find(function(course) {
  return course.CourseId == "PROJ500";
}).Title;
console.log('Title of PROJ500:', titlePROJ500);

// What are the titles of the courses that cost $50 or less?
let cheapCourses = courses.filter(function(course) {
  return parseFloat(course.Fee) <= 50.00;
}).map(function(course) {
  return course.Title;
});
console.log('Courses that cost $50 or less:', cheapCourses);

// What classes meet in "Classroom 1"?
let classesInClassroom1 = courses.filter(function(course) {
  return course.Location == "Classroom 1";
}).map(function(course) {
  return course.Title;
});
console.log('Classes in Classroom 1:', classesInClassroom1);


