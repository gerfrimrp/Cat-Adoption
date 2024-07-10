const router = require("express").Router();
const UserProfileController = require("../controllers/UserProfileController");

const { authorizeProfile } = require("../middlewares/authorization");

router.get("/user-profile", UserProfileController.createUserProfile);
router.post("/user-profile", UserProfileController.createUserProfile);
router.put(
  "/user-profile/edit",
  authorizeProfile,
  UserProfileController.editUserProfile
);

module.exports = router;
