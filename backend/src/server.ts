import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mysql, { MysqlError } from "mysql";

dotenv.config();
const app = express();
const port = process.env.PORT;

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

// Middleware
app.use(
  cors({
    methods: ['POST', 'GET'],
    allowedHeaders: ['Content-Type'],
  }),
);
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get('/api/get-test', async (req, res) => {
  connection.connect(function (err: MysqlError) { if (err) { console.error(err.stack); return; } })
  res.send();
});
app.post('/api/register', async (req, res) => {
  connection.query(`INSERT INTO users (username, email, hashword,created_at) VALUES (${req.body.username}, ${req.body.email}, ${req.body.hash}, ${req.body.datetime})`, function (error: MysqlError, results: string, fields: string) {
    res.send(`Error: ${error}\n Results: ${results}\n Fields: ${fields}`);
  });
});
