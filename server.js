const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();


// =============================
// MIDDLEWARE
// =============================
app.use(cors());
app.use(express.json());


// =============================
// MYSQL CONNECTION
// =============================
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'my_password',   // change if your MySQL password is different
  database: 'login_app'
});

db.connect((err) => {
  if (err) {
    console.log("DB connection error:", err);
  } else {
    console.log("Connected to MySQL");
  }
});


// =====================================================
// PROCESS MASTER APIs
// =====================================================

// GET ALL PROCESSES
app.get('/processes', (req, res) => {
  db.query(
    'SELECT * FROM processes ORDER BY process_id DESC',
    (err, result) => {
      if (err) {
        console.log("Fetch process error:", err);
        return res.status(500).json([]);
      }
      res.json(result);
    }
  );
});


// ADD PROCESS
app.post('/processes', (req, res) => {
  const { process_name, active } = req.body;

  db.query(
    'INSERT INTO processes (process_name, active) VALUES (?, ?)',
    [process_name, active],
    (err) => {
      if (err) {
        console.log("Insert process error:", err);
        return res.status(500).json({ error: err });
      }

      res.json({
        success: true,
        message: "Process added successfully"
      });
    }
  );
});


// UPDATE PROCESS
app.put('/processes/:id', (req, res) => {
  const { process_name, active } = req.body;

  db.query(
    'UPDATE processes SET process_name=?, active=? WHERE process_id=?',
    [process_name, active, req.params.id],
    (err) => {
      if (err) {
        console.log("Update process error:", err);
        return res.status(500).json({ error: err });
      }

      res.json({
        success: true,
        message: "Process updated successfully"
      });
    }
  );
});


// DELETE PROCESS
app.delete('/processes/:id', (req, res) => {
  db.query(
    'DELETE FROM processes WHERE process_id=?',
    [req.params.id],
    (err) => {
      if (err) {
        console.log("Delete process error:", err);
        return res.status(500).json({ error: err });
      }

      res.json({
        success: true,
        message: "Process deleted successfully"
      });
    }
  );
});


// =====================================================
// KNOWLEDGE ARTICLES APIs
// =====================================================

// =====================================
// GET ALL KNOWLEDGE ARTICLES
// =====================================
app.get('/knowledge-articles', (req, res) => {
  db.query(
    'SELECT * FROM knowledge_articles',
    (err, result) => {
      if (err) {
        console.log("Knowledge fetch error:", err);
        return res.status(500).json([]);
      }

      console.log("Knowledge Articles Data:", result);
      res.json(result);
    }
  );
});


// =====================================
// ADD KNOWLEDGE ARTICLE
// =====================================
app.post('/knowledge-articles', (req, res) => {
  const {
    process_name,
    activity,
    document_name,
    remarks
  } = req.body;

  db.query(
    `INSERT INTO knowledge_articles
    (process_name, activity, document_name, remarks)
    VALUES (?, ?, ?, ?)`,
    [
      process_name,
      activity,
      document_name,
      remarks
    ],
    (err) => {
      if (err) {
        console.log("Insert knowledge error:", err);
        return res.status(500).json({ error: err });
      }

      res.json({ success: true });
    }
  );
});


// =====================================
// DELETE KNOWLEDGE ARTICLE
// =====================================
app.delete('/knowledge-articles/:id', (req, res) => {
  db.query(
    'DELETE FROM knowledge_articles WHERE article_id = ?',
    [req.params.id],
    (err) => {
      if (err) {
        console.log("Delete knowledge error:", err);
        return res.status(500).json({ error: err });
      }

      res.json({ success: true });
    }
  );
});

// DELETE KNOWLEDGE ARTICLE
app.delete('/knowledge-articles/:id', (req, res) => {
  db.query(
    'DELETE FROM knowledge_articles WHERE id=?',
    [req.params.id],
    (err) => {
      if (err) {
        console.log("Delete knowledge error:", err);
        return res.status(500).json({ error: err });
      }

      res.json({
        success: true,
        message: "Knowledge article deleted successfully"
      });
    }
  );
});


// =====================================================
// USER REGISTRATION APIs
// =====================================================

// GET ALL USERS
app.get('/users', (req, res) => {
  db.query(
    'SELECT * FROM users ORDER BY user_id DESC',
    (err, result) => {
      if (err) {
        console.log("Fetch users error:", err);
        return res.status(500).json([]);
      }
      res.json(result);
    }
  );
});


// ADD USER
app.post('/users', (req, res) => {
  const {
    empcode,
    full_name,
    email,
    password,
    role,
    process_name,
    active
  } = req.body;

  db.query(
    `INSERT INTO users
    (empcode, full_name, email, password, role, process_name, active)
    VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      empcode,
      full_name,
      email,
      password,
      role,
      process_name,
      active
    ],
    (err) => {
      if (err) {
        console.log("Insert user error:", err);
        return res.status(500).json({ error: err });
      }

      res.json({
        success: true,
        message: "User added successfully"
      });
    }
  );
});


// UPDATE USER
app.put('/users/:id', (req, res) => {
  const {
    empcode,
    full_name,
    email,
    password,
    role,
    process_name,
    active
  } = req.body;

  db.query(
    `UPDATE users
    SET empcode=?, full_name=?, email=?, password=?, role=?, process_name=?, active=?
    WHERE user_id=?`,
    [
      empcode,
      full_name,
      email,
      password,
      role,
      process_name,
      active,
      req.params.id
    ],
    (err) => {
      if (err) {
        console.log("Update user error:", err);
        return res.status(500).json({ error: err });
      }

      res.json({
        success: true,
        message: "User updated successfully"
      });
    }
  );
});


// DELETE USER
app.delete('/users/:id', (req, res) => {
  db.query(
    'DELETE FROM users WHERE user_id=?',
    [req.params.id],
    (err) => {
      if (err) {
        console.log("Delete user error:", err);
        return res.status(500).json({ error: err });
      }

      res.json({
        success: true,
        message: "User deleted successfully"
      });
    }
  );
});


// =============================
// START SERVER
// =============================
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
}