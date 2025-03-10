import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    methods: ['POST', 'GET'],
    allowedHeaders: ['Content-Type'],
  }),
);
app.use(express.json());

app.listen(port, () => {
  console.log(`Sever running at http://localhost:${port}`);
})

app.post('/api/test', async (req, res) => {
  try { }
  catch (error) { }
})
