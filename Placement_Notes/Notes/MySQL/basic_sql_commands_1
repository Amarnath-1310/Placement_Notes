-- 1. Create a database
CREATE DATABASE Prince;

-- 2. Use the database
USE Prince;

-- 3. Create a table
CREATE TABLE students (
    rollno INT,
    name VARCHAR(255),
    department VARCHAR(200),
    age INT,
    dob DATE,
    gender CHAR(1)
);

-- 4. See empty table
SELECT * FROM students;

-- 5. Insert one record
INSERT INTO students
VALUES (1011, 'Asha', 'Computer Science', 20, '2005-03-15', 'F');

-- 6. Show data
SELECT * FROM students;

-- 7. Add a new column (gpa)
ALTER TABLE students
ADD gpa FLOAT;

-- 8. Update GPA of rollno 1011
UPDATE students
SET gpa = 9.5
WHERE rollno = 1011;

-- 9. Remove the "age" column
ALTER TABLE students
DROP COLUMN age;

-- 10. Insert another record (without age column now)
INSERT INTO students (rollno, name, department, dob, gender, gpa)
VALUES (1012, 'Rahul', 'Mechanical', '2004-11-02', 'M', 8.7);

INSERT INTO students (rollno, name, department, dob, gender, gpa)
VALUES
(1011, 'Asha', 'Computer Science', '2005-03-15', 'F', 9.5),
(1012, 'Rahul', 'Mechanical', '2004-11-02', 'M', 8.7),
(1013, 'Priya', 'Electronics', '2003-07-21', 'F', 8.9),
(1014, 'Karan', 'Civil', '2002-12-05', 'M', 7.8),
(1015, 'Anita', 'Computer Science', '2004-01-11', 'F', 9.2),
(1016, 'Vikram', 'IT', '2003-09-09', 'M', 8.4),
(1017, 'Sneha', 'Mechanical', '2004-05-30', 'F', 8.1),
(1018, 'Ravi', 'Civil', '2002-07-17', 'M', 7.5),
(1019, 'Meena', 'Electronics', '2003-08-22', 'F', 9.0),
(1020, 'Arjun', 'Computer Science', '2004-10-12', 'M', 8.8);

-- 11. Delete one record
DELETE FROM students
WHERE rollno = 1012;

-- 12. Truncate (remove all rows)
TRUNCATE TABLE students;

-- 13. Drop the table
DROP TABLE students;

-- 14. Drop the database
DROP DATABASE greens;


