const UserController = require("../controllers/UserController");

const router = require("express").Router();

app.post("/login", UserController.login);
app.post("/register", UserController.register);

module.exports = router;
