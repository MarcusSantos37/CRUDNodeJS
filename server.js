const http = require("http");

http.createServer((req, res) => {

    res.writeHead(200, {'Content-type' : "application/json"});

    if (req.url === "/produto") {
        res.end(JSON.stringify({
            message: "Rota de produto"
        }))
    }

    if (req.url === "/usuario") {
        res.end(JSON.stringify({
            message: "Rota de usuário"
        }))
    }
    
    res.end(JSON.stringify({
        message: "Acesso negado"
    }))

}).listen(4001, () => console.log("Servidor rodando na porta 4001"))