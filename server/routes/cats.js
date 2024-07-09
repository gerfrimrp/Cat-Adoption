const CatController = require("../controllers/CatController");
const authentication = require("../middlewares/authentication");
const { authorizeCat } = require("../middlewares/authorization");

const router = require("express").Router();

router.use(authentication);
router.get("/", CatController.findUserCats);
router.post("/", CatController.createCat);
router.put("/:id", authorizeCat, CatController.editCat);
router.delete("/:id", authorizeCat, CatController.deleteCat);

module.exports = router;
