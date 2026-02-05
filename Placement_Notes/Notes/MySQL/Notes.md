# Data Definition (DDL)

Data Definition Language (DDL) is used to **define, create, modify, and delete database structures**. It works on the **structure**, not the data.

---

## 1. Database vs Schema

### Database

* A **database** is a container that stores tables and other database objects.
* Example: `classicmodels`
* Think of it as a **main folder**.

### Schema

* A **schema** is a logical grouping inside a database.
* In **MySQL**, **database and schema mean the same thing**.
* In other DBs (Oracle, PostgreSQL), schema is separate.

**Key Point:**

> In MySQL, creating a database also creates a schema.

---

## 2. CREATE DATABASE

### Definition

* Used to create a **new database**.
* Without a database, tables cannot be created.

### Syntax

```sql
CREATE DATABASE database_name;
```

### Safe Syntax

```sql
CREATE DATABASE IF NOT EXISTS database_name;
```

### Example (ClassicModels)

```sql
CREATE DATABASE IF NOT EXISTS classicmodels;
```

---

## 3. USE

### Definition

* Selects the **active database**.
* All SQL commands run inside the selected database.

### Syntax

```sql
USE database_name;
```

### Example

```sql
USE classicmodels;
```

---

## 4. DROP DATABASE

### Definition

* Deletes the **entire database permanently**.
* Removes all tables and data.

### Syntax

```sql
DROP DATABASE database_name;
```

### Safe Syntax

```sql
DROP DATABASE IF EXISTS database_name;
```

### Example

```sql
DROP DATABASE IF EXISTS classicmodels;
```

---

## 5. Typical Workflow (ClassicModels)

```sql
CREATE DATABASE IF NOT EXISTS classicmodels;
USE classicmodels;

CREATE TABLE test_table (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

DROP DATABASE classicmodels;
```

---

## 6. Important Interview Notes

* DDL commands affect **structure**, not data.
* `USE` must be executed before working with tables.
* `DROP DATABASE` is **irreversible**.
* In MySQL, **schema = database**.

---

## 7. One-Line Definitions

* **Database**: Container that stores tables and objects.
* **Schema**: Logical grouping (same as database in MySQL).
* **CREATE DATABASE**: Creates a new database.
* **USE**: Selects the active database.
* **DROP DATABASE**: Permanently deletes a database.

# Tables (DDL)

Tables are database objects used to **store data in rows and columns**. Every table belongs to a database.

---

## 1. CREATE TABLE

### Definition

* Used to create a **new table** in the selected database.
* Defines column names, data types, and constraints.

### Syntax

```sql
CREATE TABLE table_name (
    column_name datatype,
    column_name datatype
);
```

### Example (ClassicModels)

```sql
CREATE TABLE sample_customers (
    customerNumber INT PRIMARY KEY,
    customerName VARCHAR(50),
    city VARCHAR(50),
    country VARCHAR(50)
);
```

---

## 2. DESCRIBE

### Definition

* Displays the **structure of a table**.
* Shows column name, data type, nullability, keys, and defaults.

### Syntax

```sql
DESCRIBE table_name;
```

### Example

```sql
DESCRIBE customers;
```

---

## 3. DROP TABLE

### Definition

* Permanently deletes a table.
* Removes both **structure and data**.

### Syntax

```sql
DROP TABLE table_name;
```

### Safe Syntax

```sql
DROP TABLE IF EXISTS table_name;
```

### Example

```sql
DROP TABLE IF EXISTS sample_customers;
```

---

## 4. ALTER TABLE

### Definition

* Used to **change the structure** of an existing table.
* Data usually remains intact.

---

### A. ADD COLUMN

#### Syntax

```sql
ALTER TABLE table_name
ADD column_name datatype;
```

#### Example

```sql
ALTER TABLE customers
ADD email VARCHAR(100);
```

---

### B. MODIFY COLUMN

#### Definition

* Changes datatype or size of a column.

#### Syntax

```sql
ALTER TABLE table_name
MODIFY column_name new_datatype;
```

#### Example

```sql
ALTER TABLE customers
MODIFY customerName VARCHAR(100);
```

---

### C. DROP COLUMN

### Definition

* Removes a column permanently.
* Column data is lost.

#### Syntax

```sql
ALTER TABLE table_name
DROP column_name;
```

#### Example

```sql
ALTER TABLE customers
DROP email;
```

---

## 5. Typical Table Workflow

```sql
USE classicmodels;

CREATE TABLE test_table (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

DESCRIBE test_table;

ALTER TABLE test_table
ADD age INT;

ALTER TABLE test_table
MODIFY name VARCHAR(100);

ALTER TABLE test_table
DROP age;

DROP TABLE test_table;
```

---

## 6. Interview Notes

* `CREATE TABLE` defines table structure.
* `DESCRIBE` shows table schema.
* `DROP TABLE` deletes table and data permanently.
* `ALTER TABLE` modifies existing structure.
* Structural changes are DDL operations.

---

## 7. One-Line Definitions

* **CREATE TABLE**: Creates a new table.
* **DESCRIBE**: Displays table structure.
* **DROP TABLE**: Deletes a table permanently.
* **ALTER TABLE**: Modifies table structure.

# Data Types (SQL)

Data types define **what kind of data a column can store**. If you choose the wrong data type, your database becomes slow, incorrect, or useless.

👉 **Brutal truth:** If data types confuse you, you are **not ready for joins, indexes, or optimization**.

---

## 1. Numeric Data Types

### INT

* Stores **whole numbers**.
* Range: approx **-2 billion to +2 billion**.
* Most commonly used for IDs.

#### Syntax Example

```sql
customerNumber INT
```

---

### BIGINT

* Stores very large whole numbers.
* Used when INT range is not enough.

#### Syntax Example

```sql
orderId BIGINT
```

---

## 2. String (Character) Data Types

### VARCHAR

* Stores **variable-length text**.
* Uses only required space.
* Best choice for names, emails, cities.

#### Syntax Example

```sql
customerName VARCHAR(50)
```

---

### CHAR

* Stores **fixed-length text**.
* Always uses full length.
* Faster but wastes space.

#### Syntax Example

```sql
countryCode CHAR(2)
```

---

### TEXT

* Stores **large text data**.
* Cannot be indexed efficiently.
* Avoid unless necessary.

#### Syntax Example

```sql
description TEXT
```

---

## 3. Date and Time Data Types

### DATE

* Stores only **date**.
* Format: `YYYY-MM-DD`

#### Syntax Example

```sql
orderDate DATE
```

---

### DATETIME

* Stores **date and time**.
* No timezone handling.

#### Syntax Example

```sql
createdAt DATETIME
```

---

### TIMESTAMP

* Stores **date and time**.
* Automatically updates based on timezone.
* Often used for tracking updates.

#### Syntax Example

```sql
lastUpdated TIMESTAMP
```

---

## 4. DECIMAL

### Definition

* Stores **exact numeric values**.
* Used for money and precise calculations.

#### Syntax

```sql
DECIMAL(total_digits, decimal_places)
```

#### Example

```sql
amount DECIMAL(10,2)
```

---

## 5. BOOLEAN

### Definition

* Stores **TRUE or FALSE** values.
* In MySQL, BOOLEAN is stored as `TINYINT(1)`.

#### Syntax Example

```sql
isActive BOOLEAN
```

---

## 6. Example Table (ClassicModels Style)

```sql
CREATE TABLE payment_example (
    paymentId INT PRIMARY KEY,
    customerNumber INT,
    amount DECIMAL(10,2),
    paymentDate DATE,
    isConfirmed BOOLEAN,
    remarks TEXT
);
```

---

## 7. Interview Notes (Important)

* Use `INT` for IDs, not `VARCHAR`.
* Use `VARCHAR` instead of `CHAR` unless length is fixed.
* Never store money in FLOAT or DOUBLE.
* Prefer `DATE` over `DATETIME` if time is not needed.
* Avoid `TEXT` unless data is truly large.

---

## 8. One-Line Definitions

* **INT**: Stores whole numbers.
* **BIGINT**: Stores very large whole numbers.
* **VARCHAR**: Variable-length text.
* **CHAR**: Fixed-length text.
* **TEXT**: Large text data.
* **DATE**: Date only.
* **DATETIME**: Date and time.
* **TIMESTAMP**: Date and time with timezone handling.
* **DECIMAL**: Exact numeric values.
* **BOOLEAN**: TRUE or FALSE values.

# CRUD OPERATIONS (Placement MUST)

CRUD represents the **four basic operations** you perform on data in a table. Interviewers assume this is **trivial knowledge**. If you mess this up, they won’t even move to joins.

---

## C – INSERT

### Definition

* Used to **add new records (rows)** into a table.

### Syntax

```sql
INSERT INTO table_name (column1, column2)
VALUES (value1, value2);
```

### Example (ClassicModels)

```sql
INSERT INTO customers (
    customerNumber,
    customerName,
    city,
    country
)
VALUES (5001, 'ABC Stores', 'Chennai', 'India');
```

---

## R – SELECT

### Definition

* Used to **retrieve data** from a table.
* This is the **most important SQL command**.

### Basic Syntax

```sql
SELECT column1, column2
FROM table_name;
```

### Select All Columns

```sql
SELECT * FROM customers;
```

### Select Specific Columns

```sql
SELECT customerName, country
FROM customers;
```

### With Condition

```sql
SELECT *
FROM customers
WHERE country = 'India';
```

---

## U – UPDATE

### Definition

* Used to **modify existing records**.

⚠️ **Brutal warning:** Forgetting `WHERE` updates the **entire table**.

### Syntax

```sql
UPDATE table_name
SET column1 = value1
WHERE condition;
```

### Example

```sql
UPDATE customers
SET city = 'Bangalore'
WHERE customerNumber = 5001;
```

---

## D – DELETE

### Definition

* Used to **remove records** from a table.

⚠️ **Brutal warning:** Forgetting `WHERE` deletes **all rows**.

### Syntax

```sql
DELETE FROM table_name
WHERE condition;
```

### Example

```sql
DELETE FROM customers
WHERE customerNumber = 5001;
```

---

## 5. Typical CRUD Flow

```sql
-- INSERT
INSERT INTO customers (customerNumber, customerName, city, country)
VALUES (5002, 'XYZ Traders', 'Mumbai', 'India');

-- READ
SELECT * FROM customers WHERE customerNumber = 5002;

-- UPDATE
UPDATE customers
SET city = 'Pune'
WHERE customerNumber = 5002;

-- DELETE
DELETE FROM customers WHERE customerNumber = 5002;
```

---

## 6. Interview Notes (Non‑Negotiable)

* `SELECT` is used in **every real query**.
* Always verify `WHERE` before `UPDATE` or `DELETE`.
* `DELETE` removes rows, not table structure.
* CRUD operations are **DML commands**.

---

## 7. One-Line Definitions

* **INSERT**: Adds new data.
* **SELECT**: Retrieves data.
* **UPDATE**: Modifies existing data.
* **DELETE**: Removes data.

# Filtering & Sorting (SQL)

Filtering and sorting decide **what rows you see and in what order**. This is not optional knowledge. If you can’t filter cleanly, joins and analytics will crush you.

---

## 1. WHERE

### Definition

* Filters rows based on a condition.
* Executes **before sorting**.

### Syntax

```sql
SELECT *
FROM table_name
WHERE condition;
```

### Example (ClassicModels)

```sql
SELECT *
FROM customers
WHERE country = 'USA';
```

---

## 2. AND, OR, NOT

### AND

* All conditions must be true.

```sql
SELECT *
FROM customers
WHERE country = 'USA' AND city = 'NYC';
```

### OR

* Any condition can be true.

```sql
SELECT *
FROM customers
WHERE country = 'USA' OR country = 'France';
```

### NOT

* Reverses a condition.

```sql
SELECT *
FROM customers
WHERE NOT country = 'USA';
```

---

## 3. IN

### Definition

* Used when checking **multiple values**.
* Cleaner than multiple OR conditions.

### Syntax

```sql
SELECT *
FROM table_name
WHERE column IN (value1, value2);
```

### Example

```sql
SELECT *
FROM customers
WHERE country IN ('USA', 'France', 'India');
```

---

## 4. BETWEEN

### Definition

* Filters values within a **range** (inclusive).

### Syntax

```sql
SELECT *
FROM table_name
WHERE column BETWEEN value1 AND value2;
```

### Example

```sql
SELECT *
FROM payments
WHERE amount BETWEEN 1000 AND 5000;
```

---

## 5. LIKE

### Definition

* Used for **pattern matching**.
* `%` → any number of characters
* `_` → single character

### Syntax

```sql
SELECT *
FROM table_name
WHERE column LIKE pattern;
```

### Examples

```sql
-- Starts with 'A'
SELECT * FROM customers WHERE customerName LIKE 'A%';

-- Ends with 'Ltd'
SELECT * FROM customers WHERE customerName LIKE '%Ltd';

-- Contains 'Auto'
SELECT * FROM products WHERE productName LIKE '%Auto%';
```

---

## 6. ORDER BY

### Definition

* Sorts result set.
* Default order is **ASC**.

### Syntax

```sql
SELECT *
FROM table_name
ORDER BY column ASC|DESC;
```

### Example

```sql
SELECT customerName, creditLimit
FROM customers
ORDER BY creditLimit DESC;
```

---

## 7. LIMIT

### Definition

* Restricts number of rows returned.
* Used heavily in pagination and performance.

### Syntax

```sql
SELECT *
FROM table_name
LIMIT number;
```

### Example

```sql
SELECT *
FROM customers
ORDER BY creditLimit DESC
LIMIT 5;
```

---

## 8. Combined Example (Realistic)

```sql
SELECT customerName, country, creditLimit
FROM customers
WHERE country IN ('USA', 'France')
  AND creditLimit BETWEEN 50000 AND 100000
ORDER BY creditLimit DESC
LIMIT 10;
```

---

## 9. Interview Notes (Critical)

* `WHERE` filters rows; `ORDER BY` sorts results.
* `IN` is cleaner and faster than multiple ORs.
* `BETWEEN` is inclusive.
* `LIKE` with `%` at start disables index usage.
* `LIMIT` is MySQL-specific (OFFSET comes later).

---

## 10. One-Line Definitions

* **WHERE**: Filters rows.
* **AND / OR / NOT**: Combine conditions.
* **IN**: Match against multiple values.
* **BETWEEN**: Match a range.
* **LIKE**: Pattern matching.
* **ORDER BY**: Sort results.
* **LIMIT**: Restrict number of rows.

# CONSTRAINTS & KEYS (VERY IMPORTANT)

Constraints are **rules applied to table columns** to protect data integrity. This is where beginners fail because they focus on queries and ignore data correctness.

👉 **Reality check:** If you don’t understand constraints, your database design is broken even if your SELECT works.

---

## Why Constraints Exist

Constraints exist to:

* Prevent invalid data
* Maintain consistency
* Enforce relationships between tables
* Protect the database from human mistakes

Databases are strict **because people are careless**.

---

## 1. PRIMARY KEY

### Definition

* Uniquely identifies each row in a table.
* Cannot be `NULL`.
* No duplicate values allowed.
* Each table should have **one and only one** primary key.

### Syntax

```sql
PRIMARY KEY (column_name)
```

### Example (ClassicModels)

```sql
CREATE TABLE departments (
    deptId INT PRIMARY KEY,
    deptName VARCHAR(50)
);
```

### Why it matters

* Enables fast lookup
* Required for relationships
* Prevents duplicate rows

---

## 2. FOREIGN KEY

### Definition

* Creates a **relationship between two tables**.
* Ensures referenced data exists.

### Syntax

```sql
FOREIGN KEY (column_name)
REFERENCES parent_table(parent_column)
```

### Example

```sql
CREATE TABLE orders_example (
    orderId INT PRIMARY KEY,
    customerNumber INT,
    FOREIGN KEY (customerNumber)
    REFERENCES customers(customerNumber)
);
```

### Why it matters

* Prevents orphan records
* Enforces referential integrity

---

## 3. UNIQUE

### Definition

* Ensures all values in a column are unique.
* Allows `NULL` values (unless combined with NOT NULL).

### Syntax

```sql
UNIQUE (column_name)
```

### Example

```sql
CREATE TABLE users (
    userId INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE
);
```

### Why it matters

* Prevents duplicate emails, usernames, etc.

---

## 4. NOT NULL

### Definition

* Prevents `NULL` values in a column.

### Syntax

```sql
column_name datatype NOT NULL
```

### Example

```sql
CREATE TABLE products_example (
    productId INT PRIMARY KEY,
    productName VARCHAR(50) NOT NULL
);
```

### Why it matters

* Ensures mandatory data is always present

---

## 5. DEFAULT

### Definition

* Assigns a default value if no value is provided.

### Syntax

```sql
column_name datatype DEFAULT value
```

### Example

```sql
CREATE TABLE employees_example (
    empId INT PRIMARY KEY,
    status VARCHAR(20) DEFAULT 'ACTIVE'
);
```

### Why it matters

* Prevents missing or inconsistent values

---

## 6. AUTO_INCREMENT

### Definition

* Automatically generates sequential numbers.
* Commonly used with primary keys.

### Syntax

```sql
column_name INT AUTO_INCREMENT
```

### Example

```sql
CREATE TABLE logs (
    logId INT AUTO_INCREMENT PRIMARY KEY,
    message VARCHAR(255)
);
```

### Why it matters

* Avoids manual ID handling
* Prevents duplicate key errors

---

## 7. Combined Example (Realistic Design)

```sql
CREATE TABLE orders (
    orderId INT AUTO_INCREMENT PRIMARY KEY,
    customerNumber INT NOT NULL,
    orderDate DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'PENDING',
    FOREIGN KEY (customerNumber)
    REFERENCES customers(customerNumber)
);
```

---

## How Constraints Protect Data

* PRIMARY KEY → prevents duplicate rows
* FOREIGN KEY → prevents invalid references
* UNIQUE → avoids duplicate important values
* NOT NULL → enforces mandatory fields
* DEFAULT → ensures predictable values
* AUTO_INCREMENT → ensures safe ID generation

---

## Interview Notes (Critical)

* Constraints are evaluated **before data is inserted**.
* PRIMARY KEY = UNIQUE + NOT NULL.
* FOREIGN KEY enforces table relationships.
* Bad constraints = bad database design.

---

## One-Line Definitions

* **PRIMARY KEY**: Unique identifier for each row.
* **FOREIGN KEY**: Enforces relationship between tables.
* **UNIQUE**: Prevents duplicate values.
* **NOT NULL**: Disallows NULL values.
* **DEFAULT**: Assigns default value.
* **AUTO_INCREMENT**: Auto-generates sequential IDs.

# JOINS (TOP PLACEMENT TOPIC)

Joins are used to **combine data from multiple tables**. This is the point where interviewers decide whether you actually understand databases or you just memorized CRUD.

👉 **Harsh truth:** If joins confuse you, you don’t understand relational databases.

---

## Why Joins Exist

* Data is normalized and stored in multiple tables
* Joins connect related data using keys
* Without joins, relational databases are useless

---

## Join Condition (Core Concept)

A **join condition** tells SQL **how rows from two tables are related**.

Usually:

* PRIMARY KEY in one table
* FOREIGN KEY in another table

Example:

```sql
customers.customerNumber = orders.customerNumber
```

---

## 1. INNER JOIN

### Definition

* Returns only rows that **match in both tables**.
* Most commonly used join.

### Syntax

```sql
SELECT columns
FROM table1
INNER JOIN table2
ON condition;
```

### Example (ClassicModels)

```sql
SELECT c.customerName, o.orderNumber
FROM customers c
INNER JOIN orders o
ON c.customerNumber = o.customerNumber;
```

### Key Point

* If no match → row is excluded

---

## 2. LEFT JOIN

### Definition

* Returns **all rows from left table**
* Matching rows from right table
* Non-matching right-side columns become `NULL`

### Syntax

```sql
SELECT columns
FROM table1
LEFT JOIN table2
ON condition;
```

### Example

```sql
SELECT c.customerName, o.orderNumber
FROM customers c
LEFT JOIN orders o
ON c.customerNumber = o.customerNumber;
```

---

## 3. RIGHT JOIN

### Definition

* Returns **all rows from right table**
* Matching rows from left table

### Syntax

```sql
SELECT columns
FROM table1
RIGHT JOIN table2
ON condition;
```

### Example

```sql
SELECT c.customerName, o.orderNumber
FROM customers c
RIGHT JOIN orders o
ON c.customerNumber = o.customerNumber;
```

---

## 4. SELF JOIN

### Definition

* A table joined with **itself**.
* Used for hierarchical or comparison queries.

### Syntax

```sql
SELECT columns
FROM table a
JOIN table b
ON condition;
```

### Example (Employees → Manager)

```sql
SELECT e.employeeNumber, m.employeeNumber AS managerId
FROM employees e
LEFT JOIN employees m
ON e.reportsTo = m.employeeNumber;
```

---

## 5. CROSS JOIN

### Definition

* Produces **Cartesian Product**.
* Every row from table1 combines with every row from table2.

### Syntax

```sql
SELECT *
FROM table1
CROSS JOIN table2;
```

### Example

```sql
SELECT c.customerName, p.productName
FROM customers c
CROSS JOIN products p;
```

⚠️ **Danger:** Rows = rows(table1) × rows(table2)

---

## Cartesian Product (Very Important)

* Happens when:

  * CROSS JOIN is used
  * OR join condition is missing

Example mistake:

```sql
SELECT * FROM customers, orders;
```

This will explode row count and kill performance.

---

## WHERE vs ON (INTERVIEW TRAP)

### ON

* Defines **join condition**
* Applied while joining tables

### WHERE

* Filters **final result set**

### Example

```sql
SELECT c.customerName, o.orderNumber
FROM customers c
LEFT JOIN orders o
ON c.customerNumber = o.customerNumber
WHERE o.orderNumber IS NOT NULL;
```

* `ON` → controls matching
* `WHERE` → filters output

---

## Interview Notes (Non-Negotiable)

* INNER JOIN = matching rows only
* LEFT JOIN keeps all left rows
* RIGHT JOIN keeps all right rows
* SELF JOIN uses same table twice
* CROSS JOIN creates Cartesian product
* Missing ON condition = disaster

---

## One-Line Definitions

* **INNER JOIN**: Matching rows from both tables
* **LEFT JOIN**: All left rows + matches
* **RIGHT JOIN**: All right rows + matches
* **SELF JOIN**: Table joined with itself
* **CROSS JOIN**: Cartesian product

# AGGREGATION & GROUPING (INTERVIEW FAVORITE)

Aggregation is about **summarizing data**. Grouping decides **how rows are bucketed before aggregation**. This topic exposes fake SQL knowledge instantly.

👉 **Hard truth:** If you don’t understand GROUP BY, you don’t understand SQL execution.

---

## Why Aggregation Exists

* Raw data is useless without summaries
* Businesses care about totals, averages, counts
* Aggregates answer **"how many, how much, how often"**

---

## 1. COUNT

### Definition

* Counts number of rows.
* `COUNT(*)` counts rows
* `COUNT(column)` ignores NULLs

### Syntax

```sql
COUNT(*)
```

### Example (ClassicModels)

```sql
SELECT COUNT(*) AS totalCustomers
FROM customers;
```

---

## 2. SUM

### Definition

* Adds numeric values.
* Works only on numeric columns.

### Syntax

```sql
SUM(column)
```

### Example

```sql
SELECT SUM(amount) AS totalPayments
FROM payments;
```

---

## 3. AVG

### Definition

* Calculates average value.
* Ignores NULLs.

### Syntax

```sql
AVG(column)
```

### Example

```sql
SELECT AVG(creditLimit) AS avgCredit
FROM customers;
```

---

## 4. MIN and MAX

### Definition

* `MIN` → smallest value
* `MAX` → largest value

### Example

```sql
SELECT MIN(amount) AS minPayment,
       MAX(amount) AS maxPayment
FROM payments;
```

---

## 5. GROUP BY

### Definition

* Groups rows **before aggregation**.
* Every selected non-aggregated column **must be in GROUP BY**.

### Syntax

```sql
SELECT column, AGG_FUNC(column)
FROM table
GROUP BY column;
```

### Example

```sql
SELECT country, COUNT(*) AS customerCount
FROM customers
GROUP BY country;
```

---

## 6. HAVING

### Definition

* Filters **groups**, not rows.
* Applied **after GROUP BY**.

### Syntax

```sql
HAVING condition
```

### Example

```sql
SELECT country, COUNT(*) AS customerCount
FROM customers
GROUP BY country
HAVING COUNT(*) > 5;
```

---

## WHERE vs HAVING (TOP INTERVIEW TRAP)

### WHERE

* Filters **rows**
* Runs **before GROUP BY**
* Cannot use aggregate functions

### HAVING

* Filters **groups**
* Runs **after GROUP BY**
* Can use aggregate functions

### Comparison Example

```sql
-- Correct
SELECT country, COUNT(*)
FROM customers
WHERE country <> 'USA'
GROUP BY country
HAVING COUNT(*) > 3;
```

---

## Grouping with Joins (Very Important)

### Example

```sql
SELECT c.country, COUNT(o.orderNumber) AS totalOrders
FROM customers c
LEFT JOIN orders o
ON c.customerNumber = o.customerNumber
GROUP BY c.country;
```

### Key Rule

* JOIN first
* GROUP after join
* Aggregate on joined result

---

## Common Mistakes (Red Flags)

* Using aggregate functions in WHERE
* Selecting columns not in GROUP BY
* Forgetting GROUP BY entirely
* Misplacing HAVING

---

## Interview Notes (Non-Negotiable)

* GROUP BY decides grouping, not aggregation
* HAVING is applied after aggregation
* WHERE is applied before grouping
* Aggregation with joins is extremely common

---

## One-Line Definitions

* **COUNT**: Counts rows
* **SUM**: Adds numeric values
* **AVG**: Calculates average
* **MIN / MAX**: Finds smallest/largest
* **GROUP BY**: Groups rows
* **HAVING**: Filters groups

# SUBQUERIES (PLACEMENT + DEV)

Subqueries are **queries inside another query**. Interviewers use this topic to test **logical thinking**, not memorization.

👉 **Truth:** If you blindly use subqueries everywhere, you don’t understand performance.

---

## Why Subqueries Exist

* Break complex problems into smaller steps
* Express logic that is hard to write as a single query
* Useful when aggregation or filtering depends on another result

---

## 1. Subquery in SELECT

### Definition

* Subquery returns a **single value** per row.
* Executed for each row of the outer query.

### Syntax

```sql
SELECT column,
       (SELECT expression FROM table WHERE condition)
FROM table;
```

### Example (ClassicModels)

```sql
SELECT customerName,
       (SELECT COUNT(*)
        FROM orders o
        WHERE o.customerNumber = c.customerNumber) AS totalOrders
FROM customers c;
```

### Warning

* Runs once per row → **slow on large tables**

---

## 2. Subquery in WHERE

### Definition

* Filters rows based on result of another query.
* Very common in interviews.

### Syntax

```sql
SELECT *
FROM table
WHERE column IN (SELECT column FROM table);
```

### Example

```sql
SELECT customerName
FROM customers
WHERE customerNumber IN (
    SELECT customerNumber
    FROM orders
);
```

---

## 3. Subquery in FROM (Derived Table)

### Definition

* Subquery acts like a **temporary table**.
* Must have an alias.

### Syntax

```sql
SELECT *
FROM (subquery) alias;
```

### Example

```sql
SELECT country, avgCredit
FROM (
    SELECT country, AVG(creditLimit) AS avgCredit
    FROM customers
    GROUP BY country
) t
WHERE avgCredit > 50000;
```

---

## 4. Correlated Subqueries

### Definition

* Subquery depends on the **outer query**.
* Executed once for each row of outer query.

### Syntax

```sql
SELECT *
FROM table1 t1
WHERE column > (
    SELECT expression
    FROM table2 t2
    WHERE t2.col = t1.col
);
```

### Example

```sql
SELECT customerName
FROM customers c
WHERE creditLimit > (
    SELECT AVG(creditLimit)
    FROM customers
    WHERE country = c.country
);
```

---

## Subquery vs JOIN (CRITICAL)

### When Subqueries are BAD

* Large datasets
* Correlated subqueries on big tables
* Performance-critical queries

### When Joins are Better

* Combining related tables
* Reporting and analytics
* Most real-world queries

### Join Rewrite Example

```sql
-- Subquery (slower)
SELECT customerName
FROM customers
WHERE customerNumber IN (
    SELECT customerNumber FROM orders
);

-- JOIN (better)
SELECT DISTINCT c.customerName
FROM customers c
JOIN orders o
ON c.customerNumber = o.customerNumber;
```

---

## Interview Notes (Red Flags)

* Using subqueries without understanding execution
* Correlated subqueries everywhere
* Not knowing JOIN alternatives

---

## Key Takeaways

* Subqueries simplify logic
* Joins are usually faster
* Correlated subqueries are expensive
* Think before writing

---

## One-Line Definitions

* **Subquery**: Query inside another query
* **Correlated Subquery**: Depends on outer query
* **Derived Table**: Subquery in FROM

# FUNCTIONS (VERY COMMON)

SQL functions transform data **inside queries**. Interviewers expect you to know these without thinking. If you avoid functions, you’re doing weak SQL.

---

## String Functions

Used to manipulate text data.

---

### CONCAT

**Definition**: Joins multiple strings.

```sql
SELECT CONCAT(firstName, ' ', lastName) AS fullName
FROM employees;
```

---

### LENGTH

**Definition**: Returns number of characters in a string.

```sql
SELECT customerName, LENGTH(customerName) AS nameLength
FROM customers;
```

---

### SUBSTRING

**Definition**: Extracts part of a string.

```sql
SELECT SUBSTRING(customerName, 1, 5) AS shortName
FROM customers;
```

---

### UPPER / LOWER

**Definition**: Converts text to uppercase or lowercase.

```sql
SELECT UPPER(country) AS upperCountry
FROM customers;

SELECT LOWER(country) AS lowerCountry
FROM customers;
```

---

### TRIM

**Definition**: Removes leading and trailing spaces.

```sql
SELECT TRIM(customerName)
FROM customers;
```

---

## Numeric Functions

Used for calculations and rounding.

---

### ROUND

**Definition**: Rounds a number to given decimal places.

```sql
SELECT ROUND(amount, 2)
FROM payments;
```

---

### FLOOR

**Definition**: Rounds down to nearest integer.

```sql
SELECT FLOOR(amount)
FROM payments;
```

---

### CEIL

**Definition**: Rounds up to nearest integer.

```sql
SELECT CEIL(amount)
FROM payments;
```

---

## Date Functions

Used to work with dates and time.

---

### NOW

**Definition**: Returns current date and time.

```sql
SELECT NOW();
```

---

### CURDATE

**Definition**: Returns current date only.

```sql
SELECT CURDATE();
```

---

### DATEDIFF

**Definition**: Returns number of days between two dates.

```sql
SELECT DATEDIFF(NOW(), orderDate) AS daysPassed
FROM orders;
```

---

### DATE_ADD

**Definition**: Adds time to a date.

```sql
SELECT DATE_ADD(orderDate, INTERVAL 7 DAY)
FROM orders;
```

---

## Combined Example (Realistic)

```sql
SELECT
    CONCAT(c.customerName, ' - ', c.country) AS customerInfo,
    ROUND(o.amount, 2) AS roundedAmount,
    DATEDIFF(CURDATE(), o.orderDate) AS daysAgo
FROM customers c
JOIN orders o
ON c.customerNumber = o.customerNumber;
```

---

## Interview Notes (Important)

* Functions run **per row**.
* Too many functions can hurt performance.
* Date functions are asked frequently.
* Functions are commonly used with SELECT and WHERE.

---

## One-Line Definitions

* **CONCAT**: Joins strings
* **LENGTH**: String length
* **SUBSTRING**: Extract part of string
* **UPPER / LOWER**: Case conversion
* **TRIM**: Removes spaces
* **ROUND**: Rounds numbers
* **FLOOR / CEIL**: Rounds down/up
* **NOW**: Current date & time
* **CURDATE**: Current date
* **DATEDIFF**: Difference in days
* **DATE_ADD**: Adds interval to date

# NORMALIZATION (DEVELOPER SKILL)

Normalization is **database design discipline**. Placements test theory, developers suffer if this is done wrong.

Brutal truth:

* Bad normalization = duplicate data
* Duplicate data = inconsistent data
* Inconsistent data = broken systems

---

## Why Normalization Exists

**Definition**: Normalization is the process of organizing tables to:

* Remove redundant data
* Maintain data integrity
* Reduce update, insert, and delete anomalies

If you don’t normalize, your database lies to you.

---

## Key Concepts

### Redundant Data

Same data stored multiple times unnecessarily.

Example problem:

* Customer name stored in `orders`, `payments`, `shipments`
* One update missed → data mismatch

---

### Functional Dependency

**Definition**: One column determines another.

Example:

```
customerNumber → customerName, phone, country
```

Meaning: If you know `customerNumber`, all other customer details are fixed.

---

## First Normal Form (1NF)

### Rule

* No repeating groups
* No multi-valued columns
* Each field holds atomic (single) values

❌ Bad Table (Not 1NF)

```
orderNumber | productCodes
101         | S10_1678, S10_1949
```

✅ 1NF Table

```
orderNumber | productCode
101         | S10_1678
101         | S10_1949
```

---

## Second Normal Form (2NF)

### Rule

* Must be in 1NF
* No partial dependency on a composite key

❌ Bad Table

```
(orderNumber, productCode) → productName
```

Product name depends only on `productCode`, not full key.

✅ Fix

* Move product details to `products` table

---

## Third Normal Form (3NF)

### Rule

* Must be in 2NF
* No transitive dependency

❌ Bad Dependency

```
orderNumber → customerNumber → customerCountry
```

Country depends on customer, not order.

✅ Fix

* Keep customer data in `customers` table

---

## Normalization Using ClassicModels (Real Example)

ClassicModels already follows 3NF:

* `customers` → customer data
* `orders` → order data
* `orderdetails` → product-order relationship
* `products` → product info

If customer country changes:

* Update once in `customers`
* Orders remain correct

That’s normalization done right.

---

## Why Developers Care (Not Just Theory)

Without normalization:

* UPDATE anomaly: change data in 10 places
* INSERT anomaly: cannot add data without fake values
* DELETE anomaly: lose important data accidentally

---

## Interview-Ready One-Liners

* **1NF**: Atomic values, no repeating groups
* **2NF**: No partial dependency
* **3NF**: No transitive dependency
* **Functional dependency**: One column determines another
* **Normalization**: Reduce redundancy and protect data

---

## Reality Check

Normalization improves **correctness**, not speed.

Performance is handled later using:

* Indexes
* Denormalization (intentionally, carefully)

If you skip normalization and jump to performance, you’re doing it backward.

# INDEXING & PERFORMANCE (DEV LEVEL)

This topic separates **people who write queries** from **engineers who design systems**.

Hard truth:

* Slow query = your fault
* Database is fast by default
* Bad indexes destroy performance

---

## What Is an Index?

**Definition**: An index is a data structure that allows the database to find rows **without scanning the entire table**.

Think of it like a **book index**:

* Without index → read every page
* With index → jump directly to the page

---

## Why Indexes Exist

Without indexes:

* Full table scan happens
* Performance degrades as data grows

With indexes:

* Faster `SELECT`
* Faster `JOIN`
* Faster `WHERE`, `ORDER BY`

Indexes trade **speed for storage**.

---

## Types of Indexes (MySQL)

### PRIMARY INDEX

* Automatically created on PRIMARY KEY
* Unique + Not Null

```sql
PRIMARY KEY (customerNumber)
```

---

### UNIQUE INDEX

* Ensures no duplicate values

```sql
CREATE UNIQUE INDEX idx_email
ON customers (contactLastName);
```

---

### NORMAL (NON-UNIQUE) INDEX

* Improves search speed

```sql
CREATE INDEX idx_country
ON customers (country);
```

---

## Composite Index

**Definition**: Index on multiple columns.

```sql
CREATE INDEX idx_country_city
ON customers (country, city);
```

Important rule (LEFTMOST PREFIX):

* Uses index for `country`
* Uses index for `country + city`
* ❌ NOT for `city` alone

Most candidates fail this.

---

## When Indexes HELP

Indexes are useful when:

* Columns used in `WHERE`
* Columns used in `JOIN`
* Columns used in `ORDER BY`
* High-cardinality columns (many unique values)

ClassicModels examples:

```sql
WHERE customerNumber = 103
JOIN orders ON customerNumber
```

---

## When Indexes HURT

Indexes are bad when:

* Table is small
* Column has few values (gender, status)
* Too many indexes exist
* Columns are frequently updated

Also dangerous:

```sql
WHERE YEAR(orderDate) = 2024
```

Function kills index usage.

---

## EXPLAIN Query (MANDATORY)

**Definition**: Shows how MySQL executes a query.

```sql
EXPLAIN
SELECT *
FROM orders
WHERE customerNumber = 103;
```

What to look for:

* `type` → avoid `ALL`
* `key` → which index used
* `rows` → rows scanned

If you don’t use EXPLAIN, you’re guessing.

---

## Real Performance Rulebook

* Index foreign keys
* Index columns used in joins
* Avoid functions on indexed columns
* Don’t over-index
* Measure before optimizing

---

## Interview One-Liners

* Index speeds up reads, slows writes
* Composite index follows leftmost rule
* EXPLAIN shows query plan
* Full table scan = bad at scale

---

## Final Reality Check

Normalization gives **correct data**.
Indexes give **fast data**.

Skipping either makes you a weak engineer.

# TRANSACTIONS (REAL-WORLD CRITICAL)

Transactions are **not optional theory**. They protect money, orders, and business logic. If you ignore this, your system *will* corrupt data.

Hard truth:

* CRUD without transactions is dangerous
* Banks, e-commerce, payroll → all depend on this

---

## What Is a Transaction?

**Definition**: A transaction is a group of SQL operations executed as **one logical unit**.

Either:

* ALL operations succeed → saved
* ANY operation fails → everything is undone

No half-success allowed.

---

## Why Transactions Exist

Without transactions:

* Partial updates happen
* Money deducted but order not placed
* Data becomes inconsistent

Transactions guarantee **data integrity**.

---

## START TRANSACTION

**Definition**: Begins a transaction block.

```sql
START TRANSACTION;
```

After this, changes are temporary until committed.

---

## COMMIT

**Definition**: Permanently saves all changes made in the transaction.

```sql
COMMIT;
```

Once committed, changes cannot be undone.

---

## ROLLBACK

**Definition**: Cancels all changes made in the transaction.

```sql
ROLLBACK;
```

Database returns to the state before `START TRANSACTION`.

---

## Real Example (ClassicModels Style)

Scenario: Create order + order details

```sql
START TRANSACTION;

INSERT INTO orders(orderNumber, orderDate, customerNumber)
VALUES (50001, CURDATE(), 103);

INSERT INTO orderdetails(orderNumber, productCode, quantityOrdered, priceEach)
VALUES (50001, 'S10_1678', 5, 95.70);

COMMIT;
```

If second insert fails → `ROLLBACK` should be used.

---

## ACID Properties (INTERVIEW FAVORITE)

### Atomicity

* All or nothing execution

### Consistency

* Database moves from one valid state to another

### Isolation

* Concurrent transactions do not interfere

### Durability

* Committed data survives crashes

Memorize this — interviewers expect it word-for-word.

---

## Isolation Problems (Basic Understanding)

### Dirty Read

* Reading uncommitted data from another transaction

### Phantom Read

* Same query returns different rows due to another transaction inserting data

(MySQL handles this using isolation levels — basic awareness is enough)

---

## Developer Reality Rules

* Always use transactions for multi-step operations
* Especially for money, orders, inventory
* Never trust auto-commit blindly

---

## Interview One-Liners

* Transaction ensures data integrity
* COMMIT saves, ROLLBACK cancels
* ACID defines transaction reliability
* Dirty read = reading uncommitted data

---

## Final Reality Check

If you don’t understand transactions:

* You can write SQL
* You cannot build systems

That difference matters.

# VIEWS & STORED OBJECTS (GOOD FOR DEV)

These are **database-side abstractions**. Not mandatory for freshers, but knowing them clearly signals **developer maturity**.

Reality check:

* Apps can be buggy
* SQL logic inside DB is stable
* Used correctly → clean systems

---

## VIEW

### What Is a View?

**Definition**: A view is a **virtual table** created from a SELECT query.

* Stores query, not data
* Always shows latest data

Think of it as a **saved SELECT**.

---

### Why Views Exist

* Simplify complex queries
* Improve readability
* Restrict column access (security)

Views are about **clarity**, not performance.

---

### CREATE VIEW

```sql
CREATE VIEW customer_orders AS
SELECT c.customerNumber, c.customerName, o.orderNumber, o.orderDate
FROM customers c
JOIN orders o
ON c.customerNumber = o.customerNumber;
```

---

### Using a View

```sql
SELECT *
FROM customer_orders
WHERE customerNumber = 103;
```

You query it like a table.

---

### DROP VIEW

```sql
DROP VIEW customer_orders;
```

---

## STORED PROCEDURES (BASIC)

### What Is a Stored Procedure?

**Definition**: A stored procedure is a **precompiled SQL program** stored in the database.

It can:

* Accept parameters
* Contain logic
* Execute multiple SQL statements

---

### Why Stored Procedures Exist

* Reuse logic
* Reduce network calls
* Centralize business rules

---

### Simple Stored Procedure Example

```sql
DELIMITER //

CREATE PROCEDURE getCustomerOrders(IN custNum INT)
BEGIN
    SELECT *
    FROM orders
    WHERE customerNumber = custNum;
END //

DELIMITER ;
```

---

### Calling a Stored Procedure

```sql
CALL getCustomerOrders(103);
```

---

## TRIGGERS (BASIC UNDERSTANDING)

### What Is a Trigger?

**Definition**: A trigger is SQL code that **runs automatically** when a table event occurs.

Events:

* INSERT
* UPDATE
* DELETE

Triggers run **without application involvement**.

---

### Why Triggers Exist

* Enforce rules automatically
* Maintain audit logs
* Prevent invalid operations

Use sparingly. Triggers can become dangerous.

---

### Simple Trigger Example

```sql
CREATE TRIGGER before_order_insert
BEFORE INSERT ON orders
FOR EACH ROW
BEGIN
    IF NEW.orderDate IS NULL THEN
        SET NEW.orderDate = CURDATE();
    END IF;
END;
```

---

## Developer Warnings (VERY IMPORTANT)

* Views ≠ performance optimization
* Stored procedures can hide logic
* Triggers can make debugging painful

Use these tools **intentionally**, not blindly.

---

## Interview One-Liners

* View = virtual table
* Stored procedure = reusable SQL program
* Trigger = automatic execution on table events

---

## Final Reality Check

Knowing CRUD gets you shortlisted.
Knowing views & stored objects makes you **useful after joining**.

# SECURITY & USER MANAGEMENT (DEV AWARENESS)

You don’t need to be a DBA, but if you ignore security, you’re a liability.

Hard truth:

* Most data breaches are **basic mistakes**
* Not advanced hacking
* Just careless SQL

---

## Why Security Matters

Databases store:

* User data
* Passwords
* Payments

One bad query can leak everything.

---

## GRANT

### What Is GRANT?

**Definition**: `GRANT` gives specific permissions to a user.

Permissions can include:

* SELECT
* INSERT
* UPDATE
* DELETE
* ALL

---

### GRANT Syntax

```sql
GRANT SELECT, INSERT
ON classicmodels.customers
TO 'app_user'@'localhost';
```

Meaning:

* User can read and insert
* Cannot delete or drop tables

---

## REVOKE

### What Is REVOKE?

**Definition**: Removes previously granted permissions.

---

### REVOKE Syntax

```sql
REVOKE INSERT
ON classicmodels.customers
FROM 'app_user'@'localhost';
```

Now the user can only SELECT.

---

## Principle of Least Privilege

**Rule**:

* Give minimum access required

Never:

* Run apps as root
* Grant ALL privileges blindly

That’s how systems get destroyed.

---

## SQL Injection (VERY IMPORTANT)

### What Is SQL Injection?

**Definition**: Attacker injects SQL code through user input.

---

### Vulnerable Query (BAD)

```sql
SELECT *
FROM users
WHERE username = '" + input + "';
```

Input:

```
' OR '1'='1
```

Result:

* Authentication bypass

---

## How SQL Injection Happens

* String concatenation
* No input validation
* Dynamic SQL

Most beginners fail here.

---

## Parameterized Queries (SAFE)

### What Are They?

**Definition**: SQL with placeholders, data sent separately.

Database treats input as **data**, not code.

---

### Example (Conceptual)

```sql
SELECT *
FROM users
WHERE username = ? AND password = ?;
```

Application binds values safely.

---

## Why Parameterized Queries Matter

* Stops SQL injection
* Improves security
* Required in production

If you concatenate SQL strings, you’re doing it wrong.

---

## Developer Reality Rules

* DB users ≠ admin users
* App users should have limited permissions
* SQL injection is preventable

---

## Interview One-Liners

* GRANT gives permissions
* REVOKE removes permissions
* SQL injection abuses input
* Parameterized queries prevent injection

---

## Final Reality Check

Security ignorance isn’t innocence.
It’s negligence.

# REAL-WORLD DATABASE DESIGN (MOST IMPORTANT)

This is where **SQL stops being academic** and becomes **engineering**.

Brutal truth:

* Syntax can be Googled
* Design mistakes live forever
* Bad schema = endless bugs

---

## What Database Design Really Means

**Definition**: Database design is converting business requirements into a **correct, scalable, and maintainable schema**.

Your job is NOT to create tables.
Your job is to model reality accurately.

---

## Step 1: Understand the Requirements

Never start with tables.

Ask:

* What are the core entities?
* What data changes over time?
* What must be unique?
* What relationships exist?

❌ Wrong approach:

> “Let’s create one big table first”

---

## Step 2: Identify Entities (Nouns)

From requirements, extract nouns.

Example (E-commerce):

* Customer
* Order
* Product
* Payment
* Employee

Each noun usually becomes a table.

---

## Step 3: Define Primary Keys

**Rule**: Every table MUST have a primary key.

Good primary keys:

* Stable
* Unique
* Meaningless to business (surrogate keys preferred)

Example:

```sql
customerNumber INT PRIMARY KEY
```

Avoid:

* Names
* Phone numbers
* Emails

They change.

---

## Step 4: Decide Relationships

### One-to-Many (MOST COMMON)

Example:

* One customer → many orders

Implementation:

* Foreign key in `orders`

```sql
orders.customerNumber → customers.customerNumber
```

---

### Many-to-Many

Never store directly.

Example:

* Orders ↔ Products

Solution:

* Junction table (`orderdetails`)

```sql
(orderNumber, productCode)
```

ClassicModels does this correctly.

---

### One-to-One (RARE)

Use only when:

* Optional data
* Security separation

Otherwise, merge tables.

---

## Step 5: Avoid Redundant Data

Never duplicate facts.

❌ Bad design:

* Customer name in orders
* Product price in multiple tables

✅ Correct:

* Reference via foreign keys

Redundancy causes inconsistency.

---

## Step 6: Apply Normalization (Up to 3NF)

Quick checklist:

* 1NF: atomic values
* 2NF: no partial dependency
* 3NF: no transitive dependency

Stop at 3NF unless performance forces denormalization.

---

## Step 7: Choose Data Types Carefully

Rules:

* Use INT for IDs
* VARCHAR for variable text
* DECIMAL for money
* DATE/DATETIME for time

Wrong types = wasted storage + slow queries.

---

## Step 8: Add Constraints

Constraints protect data **even if application fails**.

Must-use:

* PRIMARY KEY
* FOREIGN KEY
* NOT NULL
* UNIQUE

Database must defend itself.

---

## Step 9: Think About Growth

Ask:

* Will this table grow fast?
* Which columns will be searched?
* Which joins are common?

Index later — design first.

---

## Mini Case Study (ClassicModels Style)

Requirement:

* Customers place orders
* Orders contain products
* Payments tracked separately

Design:

* customers
* orders
* orderdetails
* products
* payments

This exact structure is why ClassicModels is a teaching DB.

---

## Interview Red Flags

* Starting with tables instead of requirements
* No primary key
* Storing comma-separated values
* Duplicate data everywhere

---

## Interview One-Liners

* Schema design models real-world entities
* Foreign keys represent relationships
* Normalization prevents redundancy
* Junction tables handle many-to-many

---

## Final Reality Check

If you can:

* Design schema from requirements
* Explain relationships
* Justify keys and constraints

You are no longer a beginner.
You are thinking like a database engineer.

# PRACTICE DATASETS (NON-NEGOTIABLE)

This is the final and **most honest section**.

Brutal truth:

* Reading SQL ≠ knowing SQL
* Watching tutorials ≠ skill
* **Data + questions = skill**

If you skip practice datasets, everything before this is wasted effort.

---

## Why Practice Datasets Matter

Real SQL ability comes from:

* Messy data
* Real relationships
* Wrong answers first

Interviewers don’t care what you studied.
They care what you can **solve**.

---

## 1. E‑Commerce Database (MOST IMPORTANT)

### What It Teaches

* Orders lifecycle
* Payments
* Inventory
* Customer behavior

### Core Tables

* customers
* products
* orders
* order_items
* payments

### Must‑Practice Questions

* Total revenue per customer
* Top selling products
* Customers with no orders
* Monthly sales trend

ClassicModels already covers this — use it deeply.

---

## 2. Student Management System

### What It Teaches

* Many‑to‑many relationships
* Constraints
* Aggregation

### Core Tables

* students
* courses
* enrollments
* grades

### Must‑Practice Questions

* Students enrolled in multiple courses
* Average marks per subject
* Students with no enrollment

---

## 3. Employee & Department Database

### What It Teaches

* Self joins
* Hierarchies
* Grouping logic

### Core Tables

* employees
* departments

### Must‑Practice Questions

* Employees earning more than manager
* Department‑wise salary totals
* Managers with most subordinates

---

## 4. Orders & Payments System

### What It Teaches

* Transactions
* Data integrity
* Edge cases

### Core Tables

* orders
* order_items
* payments

### Must‑Practice Questions

* Orders without payments
* Partial payments
* Failed transactions recovery

---

## How to Practice (Correct Way)

Wrong way:

* Copy answers
* Memorize queries

Right way:

1. Read the question
2. Design query yourself
3. Fail
4. Fix
5. Optimize

Struggle = learning.

---

## Minimum Practice Standard

If you haven’t written:

* 200+ SELECT queries
* 50+ JOIN queries
* 30+ GROUP BY problems

You are **not ready**.

---

## Final Reality Check

SQL is not theoretical.
It’s a **problem‑solving tool**.

Practice decides everything.
