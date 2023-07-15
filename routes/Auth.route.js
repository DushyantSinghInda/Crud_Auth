const express = require("express");
const router = express.Router();

router.post("/register", async (req, res, next) => {
  res.send("Register Route");
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
