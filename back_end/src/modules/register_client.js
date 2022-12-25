const {hash} = require("bcrypt");
const prisma = require("../database/database.js");

const registerNewClient = async (
    email,
    password,
) => {
    const clientExist = await prisma.user.findFirst({
        where: {
            email: {
                equals: email
            }
        }
    });

    if (clientExist) {
        return null;
    }

    const safePassword = await hash(password, 8);

    const client = await prisma.user.create({
        data: {
            email: email,
            password: safePassword,
        }
    });

    return client;
}

module.exports = registerNewClient;