const express = require("express");
const app = express();
const passport = require("passport");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const courtRoutes = require("./routes/courtRoutes");
const reservationRoutes = require("./routes/reservationRoutes");
require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use("/users", userRoutes);
app.use("/courts", courtRoutes);
app.use("/reservations", reservationRoutes);

module.exports = {
    app,
    port
};
