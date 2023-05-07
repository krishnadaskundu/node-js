/*
const express = require('express');
const app = express();

app.get("", (req, resp) => {
    resp.send(`
    <h1>Welcome to Home page</h1>
    <a href="/about">Go to About page</a>
    `);
});

app.get("/about", (req, resp) => {
    resp.send(`
    <input type="text" placeholder="user name" value="${req.query.name}"  />
    <button>Click</button>
    <a href="/">Go to Home page</a>
    `);
});

app.get("/help", (req, resp) => {
    resp.send([
        {
            name:'Peter',
            email:'peter@test.com'
        },
        {
            name:'Bruce',
            email:'bruce@test.com'
        }
    ]);
});


app.listen(5000);*/

const express = require("express");
const { get } = require("express/lib/response");

const app = express();

app.get('' ,(req, resp) =>{
    
    resp.send(`
        <h1>welcome, ${req.query.name} </h1>
        <a href="/about">about</a>
        <a href="/help">help</a>
        </br>
        <input type="text" placeholder="name" value="${req.query.name}">
    `)
})

app.get('/about' ,(req, resp) =>{
    
    resp.send(`
    <h1>about us page</h1>
    <a href="/">home</a>
    <a href="/help">help</a>
    `)
})

app.get('/help' ,(req, resp) =>{
    
    resp.send(`
        <h1>help page</h1>
        <a href="/">home</a>
        <a href="/about">about</a>

        [{name: 'krishna',
        age: 26},
        {name: 'rama',
        age: 26}]

    `)
})

app.listen(4848);