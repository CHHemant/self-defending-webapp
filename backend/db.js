const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('attacks.db');

// Create table if not exists
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS attacks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT,
    detail TEXT,
    time TEXT
  )`);
});

function logAttack(type, detail) {
  db.run(
    'INSERT INTO attacks (type, detail, time) VALUES (?, ?, ?)',
    [type, JSON.stringify(detail), new Date().toISOString()]
  );
}

function getAttacks(callback) {
  db.all('SELECT * FROM attacks ORDER BY id DESC', (err, rows) => {
    callback(rows || []);
  });
}

module.exports = { logAttack, getAttacks };
