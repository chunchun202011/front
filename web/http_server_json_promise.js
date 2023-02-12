const http = require('http')

//创建server
const server = http.createServer(async (req, res) => {
    // receive body from client
    const msg = await new Promise((resolve, reject) => {
        const bufs = []
        req.on('data', (buf) => {
            bufs.push(buf)
     })
    req.on('error', (err) => {
        reject(err)
    })
        req.on('end', () => {
            //bufs
           const buf = Buffer.concat(bufs).toString('utf-8')
            let msg = 'hello'

            try{
              const ret = JSON.parse(buf)
              msg = ret.msg  
         }catch(err){
               res.end('invalid json')
         }

         resolve(msg)
        })
    })

    
    // response
    const responseJson = {
        msg: 'receive: ${msg}'
    }
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(responseJson))
 })


   

//server创建好后创建端口
const port = 3000

server.listen(port, () =>{
    console.log('server listens on:',port)
})
