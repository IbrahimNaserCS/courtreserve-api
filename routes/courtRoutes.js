const { Router } = require("express");
const courtRouter = Router();
const { getAllCourts, getReservedDates } = require("../controllers/courtController");
const { verifyToken } = require("../auth/authfunction");

courtRouter.get("/", async (req, res) => {
    const courts = await getAllCourts();
    res.json(courts);
});

courtRouter.get("/:courtid", async (req, res) => {
    const reservedDate = await getReservedDates(req.params.courtid);
    res.json(reservedDate);
})

module.exports = courtRouter;
