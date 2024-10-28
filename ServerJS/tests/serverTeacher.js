// simple.
// Arquivo do professor com adaptação na identação.

const http = require('http');

const srv = http.createServer(
    (req, res) => {
        console.log("Método: ", req.method);
        console.log("Headers: ", req.headers);
        
        console.log("Versão: ", req.httpVersion);
        res.end("Chamada recebida com sucesso!!!");
    }
);

srv.listen(3001, () => {
    console.log('Servidor inicializado.');
});

// Exemplos de comandos no CURL
// curl -i -X GET http://localhost:3001/
// curl -i -X POST -H 'Content-Type: application/json' -d '{"name": "Felipe", "idade": "33"}' http://localhost:3001/
// curl -X DELETE http://localhost:3001/