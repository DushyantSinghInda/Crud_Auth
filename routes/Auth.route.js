const express = require("express");
const router = express.Router();
const createErrorHandler = require("http-errors");
const User = require("../Models/User.model");
const { authSchema } = require("../helpers/validation_schema");

router.post("/register", async (req, res, next) => {
  try {
    // const { email, password } = req.body;
    // if (!email || !password) throw createErrorHandler.BadRequest();

    const result = await authSchema.validateAsync(req.body);

    const doesExist = await User.findOne({ email: result.email });
    if (doesExist)
      throw createErrorHandler.Conflict(
        `${result.email} is already been registered`
      );

    const user = new User(result);
    const savedUser = await user.save();

    res.send(savedUser);
  } catch (error) {
    if (error.isJoi === true) error.status = 422;
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  res.send("login Route");
});

router.post("/refresh-token", async (req, res, next) => {
  res.send("refresh token Route");
});

router.delete("/logout", async (req, res, next) => {
  res.send("logout Route");
});

module.exports = router;
