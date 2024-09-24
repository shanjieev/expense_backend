const express = require('express');
const app = express();
const cors =require('cors');


require('dotenv').config({path:"/config.env"})
const  port = process.env.port||5000;

app.use(cors());
app.use(express.json());

const con = require('./db/connection.jsx');


app.use(require('./routes/route'))

con.then(db => {
    if(!db) return process.exit(1);


app.listen(port,()=>{
    console.log('server is running on port: ${port}')
})
app.on('error', err => console.log(`Failed To Connect with HTTP Server : ${err}`));
// error in mondb connection
}).catch(error => {
console.log(`Connection Failed...! ${error}`);
});