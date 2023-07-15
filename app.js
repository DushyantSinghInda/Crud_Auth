const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
require("dotenv").config();

const AuthRoute = require("./routes/Auth.route");

const app = express();

app.get("/", async (req, res, next) => {
  res.send("Hello, world!");
});

app.use("/auth", AuthRoute);

app.use(async (req, res, next) => {
  //   const error = new Error("Not Found");

  //   error.status = 404;
  //   next(error);
  next(createError.NotFound("This route does not exist"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    errror: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
