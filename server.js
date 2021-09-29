'use strict'
const express = require('express');

const app = express();
const port = 8042;

app.get('/', (req, res) => {
    
    res.send('Hello');

})

app.listen(port,() => {
    console.log(`the app listen to ${port}`);
})
