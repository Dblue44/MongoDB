const express = require('express');
const mongoose = require('mongoose');
const movieRouter = require('./routes/movie-routes');

const PORT = 3000;
const URL = "mongodb://127.0.0.1:27017/MoviesDB";

const app = express();
app.use(express.json());
app.use(movieRouter);

mongoose
    .connect(URL)
    .then((res) => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`listening port ${PORT}`);
});

