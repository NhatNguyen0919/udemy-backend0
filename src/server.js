require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRoute = require('./routes/web');
// commonjs

const app = express(); // app express
const port = process.env.PORT || 8081; // port
const hostname = process.env.HOST_NAME;
// Get the client
const connection = require('./config/database');


configViewEngine(app);

app.use('/test', webRoute);


// simple query
connection.query(
    'SELECT * FROM Users u ',
    function (err, results, fields) {
        console.log(">>>result=", results); // results contains rows returned by server
    }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})