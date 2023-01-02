const express = require("express");
const server = express();
const path = require("path");
const session = require("express-session");
const port = 3000;

const registerClientRoute = require("./routes/register_client_route");
const loginClientRoute = require("./routes/login_client_route");
const homeRoute = require("./routes/home_route");

server.use(express.json());
server.use(session({
    secret: "wkndawdnwouidnawdnawonds", //é uma chave que cria uma sessão
    resave: true,
    saveUninitialized: true,
}));

server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');
server.set('views', path.join(__dirname, '/pages'));

server.use(homeRoute);
server.use(registerClientRoute);
server.use(loginClientRoute);

server.listen(port, () => console.log("Server running on port 3000"));