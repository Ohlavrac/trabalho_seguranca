const express = require("express");
const app = express();
const router = express.Router();
const session = require("express-session");

const registerNewClient = require("../modules/register_client.js");

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.use(session({
    secret: "wkndawdnwouidnawdnawonds", //é uma chave que cria uma sessão
    resave: true,
    saveUninitialized: true,
}));


router.get("/register", (req, res) => {
    res.render("register.html");
});

router.post("/register", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password

    console.log(password)
    console.log(email)
    console.log(name)

    const result = await registerNewClient(name, email, password);

    console.log(result);

    if (result == null) {
        res.status(400).json({"message": "Register Error"});
    } else {
        //res.status(200).json(result);
        res.redirect("/login");
    }
});

module.exports = router;
