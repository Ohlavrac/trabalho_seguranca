const express = require("express");
const server = express();
const port = 3000;

const registerClientRoute = require("./routes/register_client_route");

server.use(express.json());

server.get("/", (req, res) => {
    res.send("Inicio do projeto de segurança para mostrar criptografia de senha");
});

server.use(registerClientRoute);

server.listen(port, () => console.log("Server running on port 3000"));