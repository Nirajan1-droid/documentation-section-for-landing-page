const http = require('node:http')

http.createServer((req,res)=>
{
    
res.writeHead(200,{'Content-Type':'application\json'});
res.write(JSON.stringify({name: 'Nirajan', email:'nirajanbhattarai12345@gmail.com'}))
res.end()
}).listen(5500);

