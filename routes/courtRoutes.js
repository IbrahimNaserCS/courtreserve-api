const { Router } = require("express");
const courtRouter = Router();
const { getAllCourts } = require("../controllers/courtController");
const { verifyToken } = require("../auth/authfunction");

courtRouter.get("/", async (req, res) => {
    const courts = await getAllCourts();
    res.json(courts);
});

courtRouter.get("/:courtid", async (req, res) => {
    
})

module.exports = courtRouter;
