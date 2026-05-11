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

// CREATE GOAL
app.post("/goals", (req, res) => {

  const { title, category } = req.body;

  // validation
  if (!title || title.trim() === "") {
    return res.status(400).json({
      error: "Title is required"
    });
  }

  db.run(
    "INSERT INTO goals (title, category) VALUES (?, ?)",
    [title, category],

    function (err) {

      if (err) {
        return res.status(500).json(err);
      }

      res.status(201).json({
        id: this.lastID,
        title,
        category,
        completed: 0
      });

    }
  );

});

// GET ALL GOALS
app.get("/goals", (req, res) => {

  db.all(
    "SELECT * FROM goals",

    (err, rows) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.status(200).json(rows);

    }
  );

});