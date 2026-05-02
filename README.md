# SOP Management System

## Project Overview

The SOP Management System is a full-stack web application developed for managing Standard Operating Procedures (SOP), Process Master, User Registration, and Knowledge Articles within an organization. The system helps in centralizing business process documentation, improving workflow management, and maintaining role-based access control for Admin and Users.


---

## Technologies Used

### Frontend

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


* Login Page
* User Registration
* Process Master
* Knowledge Articles
* Create SOP Popup
* MySQL Tables


---

## Author

### Rahil Siddiqui

Full Stack Development Project
Angular | Node.js | MySQL | Express.js

---
