const express = require('express');
const app = express();
require('dotenv').config();
const login = require('./app/router/router');

app.get('/',(req,res)=>{
    res.json({msg: `API - V${process.env.VERSION}`})
});

/* rutas in mi */
app.use('/login',login);

/* server listenig */
app.listen(process.env.PORT,function() {
    try {
        console.log('Server runing in port: ',process.env.PORT);
    } catch (error) {
        console.error('Error: ',error);
    }
});