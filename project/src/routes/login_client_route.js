const express = require("express");
const app = express();
const router = express.Router();
const session = require("express-session");
const loginClient = require("../modules/login_client.js");

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.use(session({
    secret: "wkndawdnwouidnawdnawonds", //é uma chave que cria uma sessão
    resave: true,
    saveUninitialized: true,
}));

router.get("/login", (req, res) => {
    res.render("login.html")
});

router.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password; 


    const loginData = await loginClient(email, password);

    console.log(">>", loginData ," ", email , password)

    if (loginData == null) {
        
        //res.status(400).json({"message": "Incorrect email or password"})
        res.redirect("/login");
    } else {
        req.session.loginData = loginData;
        //res.status(200).json(loginData);
        res.redirect("/home");
    }
});

router.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/login");
});

module.exports = router;