const { Router } = require("express");
const reservationRouter = Router();
const { verifyToken } = require("../auth/authfunction");
const { getUserReservations, addReservation, deleteReservation } = require("../controllers/reservationController");

reservationRouter.get("/:userid", async (req, res) => {
    const reservations = await getUserReservations(req.params.userid);
    res.json(reservations);
});

reservationRouter.post("/", async (req, res) => {
    await addReservation(req.body.courtId, req.body.username, req.body.date);
    res.sendStatus(200);
});

reservationRouter.delete("/:reservationid", async (req, res) => {
    await deleteReservation(req.params.reservationid);
    res.sendStatus(200);
})

module.exports = reservationRouter;
