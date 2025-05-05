const { Router } = require("express");
const reservationRouter = Router();
const { verifyToken } = require("../auth/authfunction");

module.exports = reservationRouter;
