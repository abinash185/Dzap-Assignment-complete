const express = require('express');
const Currency = require('../controller/currency.controller')
const Convert = require('../controller/convert.controller')

const Route = express.Router();


Route.get('/api/currencies' , Currency);
Route.post('/api/convert' , Convert);

module.exports = Route;