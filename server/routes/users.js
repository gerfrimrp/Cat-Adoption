const UserController = require("../controllers/UserController");

const router = require("express").Router();

app.post("/register", UserController.register);
app.post("/login", UserController.login);
app.post("/login/google", UserController.loginGoogle);

module.exports = router;
