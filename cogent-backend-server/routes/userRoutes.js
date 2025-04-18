const express = require('express');
const router = express.Router();
const db = require('../db');

// Route to handle user registration
router.post('/register', async (req, res) => {
  const {
    firstName,
    lastName,
    jobTitle,
    company,
    mobileNumber,
    email,
    website
  } = req.body;

  try {
    const [result] = await db.execute(
      'INSERT INTO registered_users (first_name, last_name, job_title, company, mobile_number, email, website) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [firstName, lastName, jobTitle, company, mobileNumber, email, website]
    );

    res.status(201).json({ message: 'Registration successful', userId: result.insertId });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
