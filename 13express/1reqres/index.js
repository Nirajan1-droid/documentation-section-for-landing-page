const express = require('express')
const app= express();//tomake the express executable the express() is passed into the app var





app.get('',(req,res)=>{
    console.log("data sent by browser",req.query.name)
    res.send('hello, '+req.query.name);

})

app.get('/about',(req,res)=>{
    res.send('hello, this is about  page');
    
})
app.get('/e',(req,res)=>{
    res.send('hello, this is help  page');
    
})

app.listen(5000);
