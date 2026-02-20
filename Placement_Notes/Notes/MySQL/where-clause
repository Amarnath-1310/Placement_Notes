Step 1: Create Database and Table
CREATE DATABASE college;
USE college;

CREATE TABLE students (
    rollno INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(100),
    dob DATE,
    gender CHAR(1),
    gpa FLOAT
);

Step 2: Insert Bulk Data (15 Students)
INSERT INTO students (rollno, name, department, dob, gender, gpa) VALUES
(1001, 'Asha', 'Computer Science', '2005-03-15', 'F', 9.5),
(1002, 'Rahul', 'Mechanical', '2004-11-02', 'M', 8.7),
(1003, 'Priya', 'Electronics', '2003-07-21', 'F', 8.9),
(1004, 'Karan', 'Civil', '2002-12-05', 'M', 7.8),
(1005, 'Anita', 'Computer Science', '2004-01-11', 'F', 9.2),
(1006, 'Vikram', 'IT', '2003-09-09', 'M', 8.4),
(1007, 'Sneha', 'Mechanical', '2004-05-30', 'F', 8.1),
(1008, 'Ravi', 'Civil', '2002-07-17', 'M', 7.5),
(1009, 'Meena', 'Electronics', '2003-08-22', 'F', 9.0),
(1010, 'Arjun', 'Computer Science', '2004-10-12', 'M', 8.8),
(1011, 'Lakshmi', 'Civil', '2005-06-06', 'F', 7.2),
(1012, 'Deepak', 'Mechanical', '2003-04-18', 'M', 6.9),
(1013, 'Geeta', 'IT', '2004-09-29', 'F', 8.6),
(1014, 'Santosh', 'Electronics', '2003-11-11', 'M', 7.9),
(1015, 'Pooja', 'Computer Science', '2004-02-20', 'F', 9.4);


Step 3: WHERE Clause Demos
1. Equal to (=)
SELECT * FROM students WHERE department = 'Computer Science';

2. Not equal to (<> or !=)
SELECT * FROM students WHERE department <> 'Mechanical';

3. Greater than (>)
SELECT * FROM students WHERE gpa > 9;

4. Less than (<)
SELECT * FROM students WHERE gpa < 8;

5. Greater than or equal (>=)
SELECT * FROM students WHERE gpa >= 8.5;

6. Less than or equal (<=)
SELECT * FROM students WHERE gpa <= 7.5;

7. AND Operator
SELECT * FROM students 
WHERE department = 'Computer Science' AND gpa > 9;

8. OR Operator
SELECT * FROM students 
WHERE department = 'Civil' OR department = 'Mechanical';

9. BETWEEN Operator (Inclusive) include 8 and 9 also
SELECT * FROM students WHERE gpa BETWEEN 8 AND 9;

10. IN Operator
SELECT * FROM students 
WHERE department IN ('IT', 'Electronics');

11. NOT IN Operator
SELECT * FROM students 
WHERE department NOT IN ('Civil', 'Mechanical');

12. LIKE Operator (Pattern Search)
SELECT * FROM students WHERE name LIKE 'A%';   -- starts with A
SELECT * FROM students WHERE name LIKE '%a';   -- ends with a
SELECT * FROM students WHERE name LIKE '%ee%'; -- contains 'ee'

13. IS NULL / IS NOT NULL
-- First make GPA of one student NULL for demo
UPDATE students SET gpa = NULL WHERE rollno = 1012;

SELECT * FROM students WHERE gpa IS NULL;
SELECT * FROM students WHERE gpa IS NOT NULL;