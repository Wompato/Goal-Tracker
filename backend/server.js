const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const errorHandler = require('./middlware/errorMiddlware');
const connectDB = require('./config/db');

connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const port = process.env.PORT || 3000

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler)

app.listen(port)