const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getAllCourts() {
    const courts = await prisma.court.findMany({
        select: {
            id: true,
            name: true
        }
    });
    return courts;
}

module.exports = {
    getAllCourts
};
