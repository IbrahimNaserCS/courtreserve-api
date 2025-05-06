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

async function getReservedDates(courtId) {
    const dates = await prisma.reservation.findMany({
        where: {
	    courtId: parseInt(courtId),
	    active: true
	},
        select: {
	    date: true
	}
    });
    return dates;
}

module.exports = {
    getAllCourts,
    getReservedDates
};
