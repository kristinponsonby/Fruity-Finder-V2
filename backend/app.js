const express = require('express');
var request = require("request");
const app = express();
const port = 3001

app.get('/', (req, res) => {res.send('Hello World');}) 
app.get('/fruits', (req, res) => {
    request('https://fruityvice.com/api/fruit/all', function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.send(body);
        }
    })
});

app.listen(port, () => {
 console.log(`starting on ${port}`);
});