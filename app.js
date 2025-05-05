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

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          username: username,
        },
      });

      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

app.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    jwt.sign({ user: req.user }, process.env.SECRET_KEY, (err, token) => {
      res.json({ token });
    });
  }
);

app.post("/signup", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: hashedPassword,
      },
    });
    res.status(200);
  } catch (err) {
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
