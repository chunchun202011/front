const http = require('http')

//创建server
const server = http.createServer((req, res) => {
    const bufs = []
    req.on('data', (buf) => {
        bufs.push(buf)
    })
    req.on('end', () => {
        //bufs
        const buf = Buffer.concat(bufs).toString('utf-8')
        try{
            const ret = JSON.parse(buf)
            const msg = ret.msg || 'Hello'
            const responseJson = {
                msg: 'receive: ${msg}'
            }
            res.end(JSON.stringify(responseJson))
        }catch(err){
            res.end('invalid json')
        }
    })
   // res.end('hello')
})

//server创建好后创建端口
const port = 3000

server.listen(port, () =>{
    console.log('server listens on:${port}')
})
