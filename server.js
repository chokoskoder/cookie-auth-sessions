const express = require('express');
const dotenv = require('dotenv');
const application = require('../cookies/src/app.js')
app = express();

const port = process.env.PORT;


app.use('/' , application);

try{
    app.listen(PORT);
}
catch(err){
    console.log("we are not able to connect to the port" , err)
}

