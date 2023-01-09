require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database connection established...'));

app.use(express.json());

const subscribersRouter = require('./routes/subscribers.js');
app.use('/subscribers', subscribersRouter);

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server started, listening on port ${port}...`))