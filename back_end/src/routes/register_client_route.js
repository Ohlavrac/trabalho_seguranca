const express = require("express");
const app = express();
const router = express.Router();

const registerNewClient = require("../modules/register_client.js");

router.post("/register", async (req, res) => {
    const {
        email,
        password
    } = req.body;

    const result = await registerNewClient(email, password);

    console.log(result);

    if (result == null) {
        return res.status(400).json({"message": "Register Error"});
    } else {
        return res.status(200).json(result);
    }
});

module.exports = router;