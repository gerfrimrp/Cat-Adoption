const router = require("express").Router();
const UserController = require("../controllers/UserController");

const { authorizeProfile } = require("../middlewares/authorization");

router.post("/user-profile", UserController.createUserProfile);
router.put(
  "/user-profile/edit",
  authorizeProfile,
  UserController.editUserProfile
);

module.exports = router;
