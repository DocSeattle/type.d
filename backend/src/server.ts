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
app.post('/api/login', async (req, res) => {
  connection.query(`SELECT EXISTS ( SELECT 1 FROM users WHERE username = "${req.body.name}" AND hashword = "${req.body.password}") `, (err, result) => {
    if (err) { console.log(err); throw err; }
    const turnArrIntoStringArr = JSON.stringify(result[0]);
    const strArrTargetValue = turnArrIntoStringArr[(turnArrIntoStringArr.length) - 2].valueOf();
    const tarValBool = +strArrTargetValue == 1;
    switch (tarValBool) {
      case true:
        //login logic
        res.send()
        return;
      case false:
        res.send("Bad username or password");
        return;
    }
  })
})
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
/** 
app.get('/api/leaderboard', async (req, res) => {
  connection.query('SELECT * FROM scores', (err, result) => {
    if (err) { console.log(err) }
    res.send(result);
  });
});
app.post('/api/post-score', async (req, res) => {
  connection.query(`INSERT INTO scores ( word_count, error_count, time, username ) VALUES ( "${req.words}", "${req.errors}", "${req.time}", "${req.user}" )`, (err, result) => {
    if (err) { console.log(err) }
    res.send(result);
  });
});
*/
