

# Student Burdern Visualizer Project

    It is a web application for faculty to know the present burdern of group of students ,taken his course, having exams scheduled.Here burdern is measured in terms of exams or assignments or so on .Our present functionality is based on the exams.Now,Faculty decision on exam date of his/her course is based on the  events of all students' exam schedules .

## Motivation
    Lack of Knowingness of Students Burden to Faculty.Multiple Exams or assignments on the same date causing students to feel stressed about the work.Faculty Can decide the deadlines/schedule without help of CRs and Postponement of Assignments/Exams can be avoided.


## Installation

```bash
npm install
```

## Build commands

```bash
ng serve -o 
```

After running the `ng serve -o ` command, you will be given a localhost URL that can be visited in a browser.


## Tech Stack

### Fornt-End
Angular 12 



### Back-end
SQL

### web apis

.NET 




## Example
There are 5 students
---------------------------
ID             | NAME     | 
CS19BTECH11004 | SAYEED   |
CS19BTECH11038 | RITHVIK  |
CS19BTECH11046 | MAHIDHAR |
CS19BTECH11042 | PRASHANTH |
CS19BTECH11005 | SHATHANAND|
----------------------------
There are 4 course 
---------------------------
ID             | NAME     | 
CS1001         |IDP       |
CS1002         |ITP       |
CS1003         |DS        |
CS1004         |ALGORITHMS|
----------------------------
STUDENTS COURSES TABLE
---------------------------
COURSE ID      |STUDENT ID    | 
CS1001         |CS19BTECH11004|
CS1001         |CS19BTECH11046|
CS1001         |CS19BTECH11042|
CS1002         |CS19BTECH11038|
CS1002         |CS19BTECH11005|
CS1003         |CS19BTECH110042|
CS1004         |CS19BTECH11042|
----------------------------

Now Each Course Faculty Can know the Students of his course with their exam schedules.i.e., The exam dates of other courses ,scheduled before , of this course student. 
Let CS1001 Schedules a exam on 1/1/2022 .CS1003,CS1004 courses have a student CS19BTECH11042 who is common with CS1001 so, CS1003 ,CS1004 cannot conduct exam on 1/1/2022.If CS1003 schedules on 2/1/2022 Then CS1004 cannot conduct on 1/1/2022 and 2/1/2022 .CS1002 can conduct on any date as all students have no exam scheduled on any date .




## Future Extensions

Exams can extended to Assignments of each course.

Presently Date is only used as restriction .by adding time of scheduling the exam as Restriction.

Number of students & Number of exams/Assignments statics can be shown 

Students can have a interface to know their work of each course.

Students getting emails for assignments and exams
