const express =require('express')
let app  = express()
 console.log(__dirname)
const path = require('path')
const publicPath = path.join(__dirname,'public')//path helps to get the path of the file inside or outside the folder

//use is the function of the express js

app.use(express.static(publicPath))//static loads the static page or static content

 app.listen(5000);
