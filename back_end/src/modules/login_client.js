const {hash} = require("bcrypt");
const bcrypt = require("bcrypt");
const prisma = require("../database/database.js");

const loginClient = async (
    email,
    password
) => {

    const clientExist = await prisma.user.findFirst({
        where: {
            email: {
                equals: email
            },
        }
    });

    if (clientExist != null) {
        const passwordOk = await bcrypt.compare(password, clientExist.password);
        if (passwordOk == true) {
            return clientExist;
        } else {
            return null;
        }
    }

    if (clientExist) {
        return null;
    }
}

module.exports = loginClient;