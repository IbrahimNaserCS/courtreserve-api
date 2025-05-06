const { Router } = require("express");
const userRouter = Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { addUser, findUser } = require("../controllers/userController");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await findUser(username);

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

userRouter.post("/signup", async (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    res.sendStatus(400);
  } else {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await addUser(req.body.username, hashedPassword);
    res.sendStatus(200);
  }
});

userRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    jwt.sign({ user: req.user }, process.env.SECRET_KEY, (err, token) => {
      res.json({ token });
    });
    }
);

module.exports = userRouter;