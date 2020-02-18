const express = require('express');
const endpoints = require('./endpoints')
const swaggerDoc = require('./swaggerDoc');
const app = express(express);

endpoints(app);
swaggerDoc(app);

app.use((err,req,res,next)=>console.log('threre',err));

app.listen(3000,()=>console.log('App started in port 3000'))