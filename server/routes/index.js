const router = require("express").Router();
const PubController = require("../controllers/PubController");
const userRouter = require("./user");
const catsRouter = require("./cats");
const UserController = require("../controllers/UserController");
const authentication = require("../middlewares/authentication");
const breedsRouter = require("./breeds");
const OpenAIController = require("../controllers/OpenAIController");
const upload = require("../middlewares/multer");
const uploadMultiple = require("../middlewares/uploadMultiple");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/login/google", UserController.loginGoogle);
router.get("/pub/cats", PubController.findAllCats);

router.use(authentication);
router.use("/user", userRouter);
router.use("/cats", catsRouter);
router.use("/breeds", breedsRouter);
router.post("/open-ai", OpenAIController.generatePromt);

module.exports = router;
