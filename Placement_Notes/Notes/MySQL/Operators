-- Create a new database
CREATE DATABASE demo_students;
USE demo_students;

-- Create the students table
CREATE TABLE students (
    rollno INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(100),
    gpa FLOAT
);


-- Insert sample data into the students table
INSERT INTO students (rollno, name, department, gpa) VALUES
(1001, 'Asha', 'Computer Science', 9.5),
(1002, 'Rahul', 'Mechanical', 8.7),
(1003, 'Priya', 'Electronics', 8.9),
(1004, 'Karan', 'Civil', 7.8),
(1005, 'Anita', 'Computer Science', 9.2),
(1006, 'Vikram', 'IT', 8.4),
(1007, 'Sneha', 'Mechanical', 8.1),
(1008, 'Ravi', 'Civil', 7.5),
(1009, 'Meena', 'Electronics', 9.0),
(1010, 'Arjun', 'Computer Science', 8.8);

-- Display all records from the students table
SELECT * FROM students;


1. Comparison Operators -- These are used to compare values.

= (Equal) 
SELECT * FROM students WHERE department = 'Computer Science';

<> or != (Not Equal)
SELECT * FROM students WHERE department <> 'Computer Science';

> (Greater Than)
SELECT * FROM students WHERE gpa > 8.0;

< (Less Than)
SELECT * FROM students WHERE gpa < 9.0;

>= (Greater Than or Equal)
SELECT * FROM students WHERE gpa >= 8.5;

<= (Less Than or Equal)
SELECT * FROM students WHERE gpa <= 8.0;



2. Logical Operators --> These operators are used to combine multiple conditions.

AND: Both conditions must be true.
SELECT * FROM students WHERE gpa > 8.0 AND department = 'Computer Science';

OR: At least one condition must be true.
SELECT * FROM students WHERE department = 'Computer Science' OR department = 'Mechanical';

NOT: Negates the condition.
SELECT * FROM students WHERE NOT department = 'Mechanical';



3. BETWEEN --> Used to filter values within a range (inclusive).
SELECT * FROM students WHERE gpa BETWEEN 8.0 AND 9.0;


4. IN --> Checks if a value matches any value in a list.
SELECT * FROM students WHERE department IN ('Computer Science', 'Mechanical');


5. LIKE --> Used for pattern matching with wildcards.

%: Represents zero or more characters.
SELECT * FROM students WHERE name LIKE 'A%'; -- Names starting with 'A'

_: Represents a single character.
SELECT * FROM students WHERE name LIKE '_rul'; -- Names like 'Arul', 'Brul', etc.


6. IS NULL / IS NOT NULL -- Used to check for NULL values.
SELECT * FROM students WHERE gpa IS NULL;
SELECT * FROM students WHERE gpa IS NOT NULL;

