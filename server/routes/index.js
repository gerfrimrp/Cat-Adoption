const router = require("express").Router();
const userRouter = require("./users");

router.get("/");
router.use("users", userRouter);
router.use("cats");

module.exports = router;
