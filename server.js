
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/expenseDB');
console.log("JWT_SECRET:", process.env.JWT_SECRET);

app.use('/api/auth', require('./src/routes/authRoutes'));
app.use('/api/expenses', require('./src/routes/expenseRoutes'));

app.listen(3000, () => console.log('Server running on port 3000'));
