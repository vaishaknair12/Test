const express = require ('express');
const dotenv = require('dotenv');
const http = require('http');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());




app.use(require('./Route/route'));


// app.get('/', (req, res) => {
//     res.send("hello world");
// });

 const connectDB = require('./config/db');
 
 dotenv.config({path: './config/config.env'});

 connectDB();

 
 const Server = http.createServer(app);
 Server.listen(3000,() => {console.log('Server listening to port 3000')})