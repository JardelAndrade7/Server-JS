// Server preparado para dar respostas diferentes para cada URL.

const http = require('http')

const server = http.createServer((req, res) => {
    const resp = []
    resp ['/'] = '<h1>Home<h1>'
    resp ['semURL'] = '<h1>URL invalida</h1>'
    console.log(resp[req.url] || resp['semURL'])
    console.log()
    res.end(resp[req.url] || resp['semURL'])
})

server.listen(3001, 'localhost', () => {
    console.log('Server de pé em http://localhost:3001')
    console.log('Para derrubar o server: ctrl + c')
    console.log()
})