const express = require('express')
const app= express();//tomake the express executable the express() is passed into the app var





app.get('',(req,res)=>{
    res.send(`
    <h1>welcome, to the homepage</h1>
    <a href = "/about">go to about page</a>
    `);

})

app.get('/about',(req,res)=>{
    res.send(`<input type = "text" paceholder = "username" value =${req.query.name}>
    <button>click me</button>
      `);
    
})
app.get('/e',(req,res)=>{
    res.send(
        {
            name : 'nirajan',
            email : 'nirajan@gmail.com'
        },
        {
            name : 'ram',
            email : 'ram@gmail.com'
        },
        {
            name : 'shyam',
            email : 'shham@gmail.com'
        },
    );
    
})

app.listen(5000);
