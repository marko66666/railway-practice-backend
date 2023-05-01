require("dotenv").config();
const pool = require("./db");
const express = require("express");

const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await pool.query("SELECT * FROM users");
  res.json(users.rows);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
