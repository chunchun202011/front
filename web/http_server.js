const http = require('http')

//创建server
const server = http.createServer((req, res) => {
    res.end('hello')
})

//server创建好后创建端口
const port = 3000

server.listen(port, () =>{
    console.log('server listens on: ${port}')
})
