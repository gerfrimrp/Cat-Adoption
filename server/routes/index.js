const router = require("express").Router();
const PubController = require("../controllers/PubController");
const userRouter = require("./user");
const catsRouter = require("./user");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.use("/user", userRouter);
router.use("/cats", catsRouter);
router.get("/pub/cats", PubController.findAllCats);

module.exports = router;
