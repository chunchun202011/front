const http = require('http')
const fs = require('fs')
const path =  require('path')
const url = require('url')

const folderPath = path.resolve(__dirname, './static')

const server = http.createServer((req, res) => {
    // expected http://127.0.0.1:3000/index.html
    const info = url.parse(req.url)

    //static/index.html
    const filepath = path.resolve(folderPath, info.path)

    const fileStream = fs.createReadStream(filepath)

    res.pipe(fileStream)
})

const port = 3000

server.listen(port, () => {
    console.log('listening on:', port)
})