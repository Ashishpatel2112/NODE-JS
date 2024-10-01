const http = require('http');
const port = 2112;

const porthandler=(req,res)=>{
    res.write("<h1>Hello</h1>")
    res.end()
}

let server = http.createServer(porthandler);
server.listen(port,(err)=>(
    err? console.error(err) : console.log(`Server listening at http://localhost:${port}`)
))
