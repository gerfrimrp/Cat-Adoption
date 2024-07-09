const router = require("express").Router();
const UserController = require("../controllers/UserController");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/login/google", UserController.loginGoogle);
router.post("/user-profile", UserController.createUserProfile);
router.post("/user-profile", UserController.createUserProfile);
router.put("/user-profile/edit", UserController.editUserProfile);

module.exports = router;
