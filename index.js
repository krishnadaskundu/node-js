/*
const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')

app.use(express.static(publicPath));

app.listen(5000);*/

const express = require("express");
const path  = require("path");

const app = express();
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

app.listen(4848);

// app.use(express.static(publicPath));