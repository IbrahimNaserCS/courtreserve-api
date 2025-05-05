const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function addUser(username, hashedPassword) {
    await prisma.user.create({
        data: {
          username: username,
          password: hashedPassword,
        },
    });
}

async function findUser(username) {
    const user = await prisma.user.findUnique({
        where: {
          username: username,
        },
    });
    return user;
}

module.exports = { 
    addUser,
    findUser
};