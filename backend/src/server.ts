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
  res.send(`req: ${req}, res: ${res}` + " success!");
});
app.post('/api/register', async (req, res) => {
  var date = new Date();
  var year = date.getUTCFullYear();
  var month = date.getUTCMonth();
  var day = date.getUTCDate();
  var hour = date.getUTCHours();
  var minute = date.getUTCMinutes();
  var second = date.getUTCSeconds();

  connection.query(`INSERT INTO users ( username, email, hashword, created_at) VALUES ( "${req.body.name}", "${req.body.email}", "${req.body.password}", "${year}-${month}-${day} ${hour}:${minute}:${second}")`, (err: MysqlError) => {
    if (err) { console.log(err) }
    res.send();
  });
});
app.get('/api/show-db', async (req, res) => {
  connection.query("SELECT * from users", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result);
  });
});
