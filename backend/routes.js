const express = require('express');
const { randomizeDefense, defenseState, checkAttack } = require('./defense');
const { logAttack, getAttacks } = require('./db');
const router = express.Router();

// Get current defense state
router.get('/defense', (req, res) => {
  res.json(defenseState);
});

// Get attack logs
router.get('/attacks', (req, res) => {
  getAttacks((rows) => res.json(rows));
});

// Handle login
router.post('/login', (req, res) => {
  randomizeDefense();

  const { [defenseState.usernameField]: username, [defenseState.passwordField]: password, csrf } = req.body;

  // CSRF check
  if (csrf !== defenseState.csrfToken) {
    logAttack('CSRF Mismatch', req.body);
    return res.status(403).json({ error: "CSRF validation failed" });
  }

  // Attack detection
  if (checkAttack(username) || checkAttack(password)) {
    logAttack('Attack Detected', req.body);
    return res.status(400).json({ error: "Attack detected" });
  }

  // Dummy authentication
  if (username === "admin" && password === "password123") {
    return res.json({ success: true });
  } else {
    return res.status(401).json({ error: "Invalid credentials" });
  }
});

module.exports = router;
