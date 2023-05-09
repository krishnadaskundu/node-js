const express = require('express');
const reqFilter= require('./middleware');
const app = express();
//const route= express.Router();

const route = express.Router();


// app.use(reqFilter);
//route.use(reqFilter)

route.use(reqFilter);
app.get('/', (res, resp) => {
    resp.send('Welcome to Home page')
});

app.get('/users', (res, resp) => {
    resp.send('Welcome to Users page')
});

route.get('/about', (res, resp) => {
    resp.send('Welcome to About page')
});
route.get('/contact', (res, resp) => {
    resp.send('Welcome to contact page')
});

//app.use('/',route);

app.use('/', route);

app.listen(4848)

/*const express = require("express");
const reqFilter= require('./middleware')

const app = express();

//app.use(reqFilter);

app.get('/',reqFilter,(req,resp) => {
    resp.send("welcome to home page");
})

app.get('/about', reqFilter, (req,resp) => {
    resp.send("welcome to about page");
})

app.get('/help',(req,resp) => {
    resp.send("welcome to help page");
})

app.listen(4848);*/