const React = require('react')
const ReactDOMServer = require('react-dom/server')
const http = require('http')

function App(prps){
    // return <div>Hello</div>

    return React.createElement('div', {}, props.children || 'Hello')
}

const server = http.createServer((req, res) => {
    res.end(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>My Application</title>
        </head>
     <body>
         ${ReactDOMServer.renderToString(
            React.createElement(App, {}, 'my_content'))}
         <script>
               alert('yes')
         </script>
     </body>
    </html>
    `)
})

const port = 3000

server.listen(port, () => {
    console.log('listening on: ', port)
})