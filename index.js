const express = require('express');
let app=express();

app.get('/ping',(req,res)=>{
  res.send('pong');
});

app.listen(3000);
console.log('server started on 3000');
