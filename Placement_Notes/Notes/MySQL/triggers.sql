-- A Trigger in SQL is a special kind of stored procedure that runs automatically when an event (INSERT, UPDATE, or DELETE) happens on a table.

-- 📌 1. Create a Sample Database & Table
-- Create Database
CREATE DATABASE companyDB;
GO

USE companyDB;
GO

-- Create Employees table
CREATE TABLE Employees (
    EmpID INT PRIMARY KEY,
    EmpName VARCHAR(50),
    Salary DECIMAL(10,2)
);

-- Create Audit table
CREATE TABLE Employee_Audit (
    AuditID INT IDENTITY(1,1) PRIMARY KEY,
    EmpID INT,
    ActionType VARCHAR(20),
    ActionDate DATETIME DEFAULT GETDATE()
);



-- Trigger for INSERT (SQL Server)
CREATE TRIGGER trg_after_insert
ON Employees
AFTER INSERT
AS
BEGIN
    INSERT INTO Employee_Audit (EmpID, ActionType)
    SELECT EmpID, 'INSERT'
    FROM inserted;
END;
GO

-- Test
INSERT INTO Employees VALUES (1, 'John Doe', 50000);
INSERT INTO Employees VALUES (2, 'Alice Smith', 60000);

SELECT * FROM Employee_Audit;


-- Trigger for UPDATE (SQL Server)

CREATE TRIGGER trg_after_update
ON Employees
AFTER UPDATE
AS
BEGIN
    INSERT INTO Employee_Audit (EmpID, ActionType)
    SELECT EmpID, 'UPDATE'
    FROM inserted;
END;
GO

-- Test
UPDATE Employees
SET Salary = 70000
WHERE EmpID = 1;

SELECT * FROM Employee_Audit;


-- Trigger for DELETE (SQL Server)
CREATE TRIGGER trg_after_delete
ON Employees
AFTER DELETE
AS
BEGIN
    INSERT INTO Employee_Audit (EmpID, ActionType)
    SELECT EmpID, 'DELETE'
    FROM deleted;
END;
GO

-- Test
DELETE FROM Employees
WHERE EmpID = 2;

SELECT * FROM Employee_Audit;