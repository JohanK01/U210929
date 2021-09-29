'use strict'
const express = require('express');
const fs = require ('fs');

const app = express();
const port = 8042;

app.get('/johan', (req, res) => {
    fs.readFile('app.html', (err, data) => {
        res.statuscode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('Content-Length', data.length);
        res.write(data);
        res.end();
    })
   
})


app.get('/', (req, res) => {
    res.send('hejsan');
})

app.listen(port,() => {
    console.log(`the app listen to ${port}`);
})
