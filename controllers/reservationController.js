const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getUserReservations(userId) {
    const reservations = await prisma.reservation.findMany({
        where: {
            username: userId 
        },
        select: {
            courtId: true,
            date: true,
            court: {
                select : { name: true }
            }
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
            id: parseInt(reservationId)
        }
    });
}

module.exports = {
    getUserReservations,
    addReservation,
    deleteReservation  
};