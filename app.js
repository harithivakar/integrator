const express = require('express');
const fetchData = require('./fetch/consume.js');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());


fetchData.fetchData();

module.exports = app;

