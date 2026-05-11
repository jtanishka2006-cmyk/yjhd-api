const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();

app.use(express.json());

// DATABASE
const db = new sqlite3.Database("yjhd.db");

// CREATE TABLE
db.run(`
CREATE TABLE IF NOT EXISTS goals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  category TEXT,
  completed INTEGER DEFAULT 0
)
`, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database ready");
  }
});

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("YJHD API running");
});

// SERVER
app.listen(3000, () => {
  console.log("Server running on port 3000");
});