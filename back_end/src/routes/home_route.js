const express = require("express");
const app = express();
const router = express.Router();

function isLogged(req, res, next) {
    //console.log(req.session.loginData)
    if (!req.session.loginData) {
        return res.redirect("/login");
    }

    return next();
}

router.get("/home", isLogged, async (req, res) => {
    res.send("HOME PAGE");
});

module.exports = router;