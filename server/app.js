const express = require("express");
const app = express();
const router = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
