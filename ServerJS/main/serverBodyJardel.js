// Server que captura o corpo da requisição e mostra na saída junto com os demais dados.

const http = require('http');

const server = http.createServer(
    (req, res) => {
        let body = '';
        var respHTML = '';
        var respConsole = '';

        // Pegar os dados do corpo.
        req.on(
            'data',
            chunk => {
                body += chunk.toString();
            }
        );

        // Construir as variáveis contendo os dados que serão retornados (tanto para o terminal como para o próprio cliente) e executar os retornos.
        req.on(
            'end',
            () => {

                // Construir a variável contendo os dados que serão retornados para o terminal.
                respConsole =
                    `\n\n\n` +
                    `Método: ${req.method}\n\n` +
                    `Headers: ${JSON.stringify(req.headers, null, 2)}\n\n` +
                    `Versão HTTP: ${req.httpVersion}\n\n` +
                    `Corpo: ${body ? body : 'Sem corpo'}`
                ;

                // Construir a variável contendo os dados que serão retornados para o cliente.
                respHTML =
                    `<h3>
                    Metodo:<br><br>
                    ${req.method}<br><br>
                    Headers:
                    <pre>${JSON.stringify(req.headers, null, 2)}</pre><br>
                    Versao HTTP:<br><br>
                    ${req.httpVersion}<br><br>
                    Corpo:
                    <pre>${body ? body : 'Sem corpo'}</pre>
                    </h3`
                ;

                // Executar os retornos.
                console.log(respConsole);
                console.log()
                res.setHeader('Content-Type', 'text/html');
                res.end(respHTML);
            }
        );
    }
);

server.listen(
    3001,
    'localhost',
    () => {
        console.log('Server de pé em http://localhost:3001');
    }
);