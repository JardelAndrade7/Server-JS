// Server preparado para dar a mesma resposta independente da URL.

const http = require('http')

const server = http.createServer((req, res) => {
    const respConsole = req.headers + '\n' + req.method
    const respHTML = '<h1>' + req.headers + '<br>' + req.method + '<h1>'
    console.log(respConsole)
    console.log()
    res.end(respHTML)
})

server.listen(3001, 'localhost', () => {
    console.log('Server de pé em http://localhost:3001')
    console.log()
})