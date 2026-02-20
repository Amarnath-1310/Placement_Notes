 **1. master**  
- Stores system info (logins, DB settings, configs).  
- If corrupted: **SQL Server won’t start.**  
- Fix: Restore from backup or rebuild.

 **2. model**  
- Template for new databases.  
- If corrupted: **Can’t create new databases,** but existing ones work.

 **3. msdb**  
- Handles jobs, schedules, backup history.  
- If corrupted: **SQL Server runs, but jobs and backup history stop working.**

 **4. tempdb**  
- Used for temporary data and operations.  
- Re-created every time SQL Server starts.  
- If corrupted: **SQL Server won’t start.**


**Summary:**  
- **master/tempdb** corrupted → SQL Server won’t start.  
- **model** corrupted → Can’t create new databases.  
- **msdb** corrupted → Jobs and backup history break, but SQL Server