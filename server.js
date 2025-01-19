const express = require('express');
const dotenv = require('dotenv');
const application = require('../cookies/src/app.js')
app = express();

dotenv.config();

const port = process.env.PORT;
console.log(port);


app.use('/' , application);

try{
    app.listen(port);
}
catch(err){
    console.log("we are not able to connect to the port" , err)
}

