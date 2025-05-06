const { Router } = require("express");
const courtRouter = Router();
const { getAllCourts, getReservedDates } = require("../controllers/courtController");
const { verifyToken } = require("../auth/authfunction");
const jwt = require("jsonwebtoken");

courtRouter.get("/", verifyToken, async (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            const courts = await getAllCourts();
            res.json(courts);
        }
    });
});

courtRouter.get("/:courtid", verifyToken, async (req, res) => {
    jwt.verify(req.token, process.env.SECRET_KEY, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            const reservedDate = await getReservedDates(req.params.courtid);
            res.json(reservedDate);
        }
    });
});

module.exports = courtRouter;
