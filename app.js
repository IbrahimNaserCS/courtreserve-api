const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(passport.initialize());


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
