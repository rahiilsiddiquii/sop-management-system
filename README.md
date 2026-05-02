# SOP Management System

## Project Overview

The SOP Management System is a full-stack web application developed for managing Standard Operating Procedures (SOP), Process Master, User Registration, and Knowledge Articles within an organization. The system helps in centralizing business process documentation, improving workflow management, and maintaining role-based access control for Admin and Users.


---

## Frontend

* Angular 16
* TypeScript
* Bootstrap
* HTML
* CSS

### Backend

* Node.js
* Express.js

### Database

* MySQL

### Tools

* VS Code
* MySQL Workbench
* GitHub

---

## Features

### Login Module

* User login functionality
* Credential validation
* LocalStorage-based session handling

### User Registration

* Add new users
* Update user details
* Delete users
* Role assignment (Admin / User)
* Process allocation
* Active status management

### Process Master

* Add new business processes
* Update existing processes
* Edit/Delete process records
* Active status management

### Knowledge Articles

* Process-wise knowledge article management
* Activity-based filtering
* Create SOP popup
* Document reference handling
* Search functionality

### Role-Based Access

* Admin users can manage all modules
* Users can view process and knowledge articles

---

## Database Tables

### users

Stores employee details and access roles

### processes

Stores process master records

### knowledge_articles

Stores SOP-related documents and activity records

---

## How to Run the Project

### Step 1: Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

### Step 2: Install Frontend Dependencies

```bash
npm install
```

### Step 3: Install Backend Dependencies

```bash
npm install express mysql cors body-parser
```

### Step 4: Setup MySQL Database

Create database:

```sql
CREATE DATABASE login_app;
```

Import required tables:

* users
* processes
* knowledge_articles

### Step 5: Update MySQL Connection

In `server.js`, update:

```js
host: 'localhost',
user: 'root',
password: 'your_password',
database: 'login_app'
```

### Step 6: Run Backend

```bash
node server.js
```

### Step 7: Run Angular Frontend

```bash
ng serve
```

Open browser:

```text
http://localhost:4200
```

---

## Project Screenshots

1. LOGIN PAGE:
This page provides a simple login form where users enter their username/email and password. On submission, the form validates the credentials and allows access to the system. It acts as the entry point of the application and ensures only authorized users can access the modules. After successful login, the user is redirected to the User Registration page or dashboard based on system flow.
  
  <img width="503" height="300" alt="image" src="https://github.com/user-attachments/assets/c17bdac1-4d48-44c7-ad4b-5f277fc1c4c4" />

2.USER REGISTRATION PAGE

This page allows admin users to register and manage users in the system by entering employee code, full name, role, email, process assignment, and active status. The form supports Add/Update operations and displays all users in a structured table with edit and delete options. This helps in managing user access and role-based control within the system.

  <img width="504" height="223" alt="image" src="https://github.com/user-attachments/assets/12486497-5b9c-47e1-adf9-8697c5a7b755" />

3.PROCESS MASTER PAGE

This page allows admin users to create and manage business processes. Users can enter process names, mark them as active, and store them in the MySQL database. The page also displays the process list in a table with edit and delete functionality for complete process management.

  <img width="503" height="150" alt="image" src="https://github.com/user-attachments/assets/8dd390b2-c904-4c85-bff1-fd5604e259e9" />

4.KNOWLEDGE ARTICLES PAGE

This page displays all SOP-related knowledge articles linked to specific business processes. Users can filter records using Process and Activity dropdowns. The table shows Process, Activity, Asset (View Doc), and Action columns for better process documentation management.

  <img width="492" height="235" alt="image" src="https://github.com/user-attachments/assets/b1ab97c3-52b8-41bc-b911-df572bc4896f" />

5.CREATE SOP POPUP FORM

This popup allows users to create a new SOP entry by selecting Process and Activity, entering document details, and adding remarks. This information is stored in the MySQL database and displayed in the Knowledge Articles table.
  <img width="469" height="269" alt="image" src="https://github.com/user-attachments/assets/14a521ba-5ff2-4400-91dc-f1b0cab1c4b7" />

  6.ROLE-BASED PROCESS ACCESS

This module manages Admin and User access control. Admin users can add, update, edit, and delete processes in Process Master, while normal users can only view process details and knowledge articles. This improves security and workflow management.
<img width="503" height="278" alt="image" src="https://github.com/user-attachments/assets/c3ea2fdc-0816-4056-b131-e8b422cfc28d" />

7.MYSQL DATABASE TABLES

This section shows the database tables used for storing users, processes, and knowledge articles in the SOP Management System. MySQL is used as the backend database for maintaining structured records and supporting CRUD operations such as Add, Update, Delete, and View.
The database ensures proper storage, retrieval, and management of all system data. The main tables used are users, processes, and knowledge_articles. These tables help in managing employee details, process information, and SOP-related documents efficiently.
The processes table stores process names and their active status. The knowledge_articles table stores process-related activities, document names, and remarks. The users table manages employee details along with role-based access information.

<img width="503" height="340" alt="image" src="https://github.com/user-attachments/assets/648b3e67-07a2-4fd5-b7b3-b40f7b4c4872" />



---
6.2FUTURE SCOPE OF WORK

While the current version of the application supports core functionalities like user management, process handling, and knowledge article maintenance, there is strong potential for future enhancements.

Adding secure authentication using JWT tokens and stronger role-based access control can improve system security and provide better admin-user permission handling. Real file upload functionality for SOP documents instead of only document names can make the system more practical for enterprise use.
The application can also be extended by adding downloadable reports in PDF or Excel format, dashboard analytics, charts for process monitoring, and email notifications for process updates. Audit logs can also be included to track user activities and system changes.

Furthermore, deploying the application to cloud platforms such as AWS, Azure, or Render can improve scalability and real-world usability. Integration with enterprise tools such as SAP, Jira, or internal workflow systems can make the platform more powerful for large organizations
_____________________________________________________________________________________________________________________________________________________________

## Author

### Rahil Siddiqui

Full Stack Development Project
Angular | Node.js | MySQL | Express.js

---
