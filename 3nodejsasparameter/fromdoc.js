const http = require("node:http")

// function reqres(req,res) =>
// {
//     res.write("hello you have asked for the response when server loading")
//     res.end()

// }
// http.createServer(reqres).listen(5500); //whole eq1
//listen as 5500 port 
 //difference with eq1 

 
http.createServer((req,res) =>
{
    res.write("hello you have asked for the response when server loading")
    res.end()

}).listen(5500);//this is en2 which is array function

// another exampple for the arrow function is that : 
const a =10;
function test (a){
    return a*10;
}
const test =(a) => a*100;
