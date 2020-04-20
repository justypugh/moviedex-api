require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const MOVIES = require('./movie-data-small.json');

const app = express();

app.use(morgan('dev'));



app.get('/movie', )


const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})