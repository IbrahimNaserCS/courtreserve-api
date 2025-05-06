const { Router } = require("express");
const reservationRouter = Router();
const { verifyToken } = require("../auth/authfunction");
const { getUserReservations, addReservation, deleteReservation } = require("../controllers/reservationController");
const jwt = require("jsonwebtoken");

reservationRouter.get("/:username", verifyToken, async (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            const decoded = authData;
            if (decoded.user.username !== req.params.username) {
                res.sendStatus(403);
            } else {
                const reservations = await getUserReservations(req.params.username);
                res.json(reservations);
            }
        }
    });
});

reservationRouter.post("/", verifyToken, async (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            const decoded = authData;
            console.log("Decoded user username is", decoded.user.username);
            console.log()
            if (decoded.user.username !== req.body.username) {
                res.sendStatus(403);
            } else {
                await addReservation(req.body.courtId, req.body.username, req.body.date);
                res.sendStatus(200);
            }
        }
    });
});

reservationRouter.delete("/:reservationid", verifyToken, async (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            const decoded = authData;
            if (decoded.user.username !== req.body.username) {
                res.sendStatus(403);
            } else {
                await deleteReservation(req.params.reservationid);
                res.sendStatus(200);
            }
        }
    });
})

module.exports = reservationRouter;
