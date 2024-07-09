const router = require("express").Router();
const UserController = require("../controllers/UserController");
const authentication = require("../middlewares/authentication");
const { authorizeProfile } = require("../middlewares/authorization");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/login/google", UserController.loginGoogle);

router.use(authentication);
router.post("/user-profile", UserController.createUserProfile);
router.put(
  "/user-profile/edit",
  authorizeProfile,
  UserController.editUserProfile
);

module.exports = router;
