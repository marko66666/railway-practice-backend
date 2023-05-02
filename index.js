require("dotenv").config();
const pool = require("./db");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/users", async (req, res) => {
  const users = await pool.query("SELECT * FROM users");
  res.json(users);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
