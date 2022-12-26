const express = require("express");
const app = express();
const router = express.Router();

const findById = require("../modules/find_by_id");

function isLogged(req, res, next) {
    //console.log(req.session.loginData)
    if (!req.session.loginData) {
        return res.redirect("/login");
    }

    return next();
}

router.get("/home", isLogged, async (req, res) => {
    res.render("home.html", {loginData: req.session.loginData});
});

module.exports = router;