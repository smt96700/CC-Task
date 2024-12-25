require("dotenv").config();

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

app.use(cors({
  origin: FRONTEND_URL
}));


app.get('/api/page-one', (req, res) => {
  res.json({message:'Welcome to Page One'});
});

app.get('/api/page-two', (req, res) => {
    res.json({message:'Welcome to Page Two'});
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
