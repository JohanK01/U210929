'use strict'
const express = require('express');
const fs = require ('fs');

const app = express();
const PORT = process.env.PORT || 8042;

app.get('/', (req, res) => {
    fs.readFile('app.html', (err, data) => {
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('Content-Length', data.length);
        res.send(data);
   
    })
   
})


app.get('/exercuse2.js', (req, res) => {
    fs.readFile('exercuse2.js', (err, data) => {
        res.setHeader('Content-Type', 'text/javasript');
        res.setHeader('Content-Length', data.length);
        res.send(data);

    })
})

app.listen(PORT,() => {
    console.log(`the app listen to ${PORT}`);
})

