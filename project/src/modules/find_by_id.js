const prisma = require("../database/database.js");

const findById = async (
    id
) => {
    const findClient = await prisma.user.findFirst({
        where: {
            id: {
                equals: id
            }
        }
    });

    if (findClient) {
        return null
    };

    return findClient;
}

module.exports = findById;