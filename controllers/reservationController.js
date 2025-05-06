const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getUserReservations(userId) {
    const reservations = await prisma.reservation.findMany({
        where: {
            username: userId 
        },
        include: {
            court: true
        },
        select: {
            courtId: true,
            name: true,
            date: true
        }
    });
    return reservations;
}

async function addReservation(courtId, username, date) {
    await prisma.reservation.create({
        data: {
            courtId: courtId,
            username: username,
            date: date
        }
    });
}

async function deleteReservation(reservationId) {
    await prisma.reservation.delete({
        where: {
            id: reservationId
        }
    });
}

module.exports = {
    getUserReservations,
    addReservation,
    deleteReservation  
};