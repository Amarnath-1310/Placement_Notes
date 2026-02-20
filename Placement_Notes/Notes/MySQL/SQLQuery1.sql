CREATE DATABASE Prince;

USE Prince;

SELECT * FROM students;

CREATE TABLE students (
    rollno INT,
    name VARCHAR(255),
    department VARCHAR(200),
    age INT,
    dob DATE,
    gender CHAR(1)
);

INSERT INTO students
VALUES (1011, 'Asha', 'Computer Science', 20, '2005-03-15', 'F');

ALTER TABLE students
ADD gpa FLOAT;

UPDATE students
SET gpa = 9.5
WHERE rollno = 1011;

ALTER TABLE students
DROP COLUMN age;

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

DELETE FROM students
WHERE rollno = 1012;

TRUNCATE TABLE students;

DROP TABLE students;

DROP DATABASE Prince;

CREATE TABLE RankCard (
    id INT,
    marks DECIMAL(5,5),
    cgpa FLOAT,
    is_pass BIT
);

INSERT INTO RankCard VALUES (1, 95.50986587688, 3.77878758678687755656746575755875, 1);
SELECT * FROM RankCard;

/*Alter table RankCard
column marks decimal(5,5); */

CREATE TABLE StudentReportCard (
    roll_no CHAR(5),
    student_name VARCHAR(50),
    remarks TEXT
);

INSERT INTO StudentReportCard VALUES ('R1001', 'Alice Smith', 'Excellent performance in all subjects.');
SELECT * FROM StudentReportCard;

CREATE TABLE DateDemo (
    dob DATE,
    login_time TIME,
    created_at DATETIME
);

INSERT INTO DateDemo VALUES ('1995-05-20', '14:30:00', '2025-08-16 14:30:00');
SELECT * FROM DateDemo;


 /* CREATE TABLE OtherDemo (
    is_active BOOLEAN,
    size ENUM('Small','Medium','Large'),
    details JSON
);

INSERT INTO OtherDemo VALUES (TRUE, 'Medium', '{"course":"SQL","duration":30}');
SELECT * FROM OtherDemo; */

CREATE DATABASE demo_students;
USE demo_students;

CREATE TABLE students (
    rollno INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(100),
    gpa FLOAT
);

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

SELECT * FROM students;

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
SELECT * FROM students WHERE name LIKE '_hul'; -- Names like 'Arul', 'Brul', etc.


6. IS NULL / IS NOT NULL -- Used to check for NULL values.
SELECT * FROM students WHERE gpa IS NULL;
SELECT * FROM students WHERE gpa IS NOT NULL;

