const router = require("express").Router();
const userRouter = require("./user");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.use("/user", userRouter);
// router.use("cats");

module.exports = router;
