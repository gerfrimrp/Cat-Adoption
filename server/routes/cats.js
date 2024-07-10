const CatController = require("../controllers/CatController");
const { authorizeCat } = require("../middlewares/authorization");

const router = require("express").Router();

router.get("/", CatController.findUserCats);
router.post("/", CatController.createCat);
router.put("/:id", authorizeCat, CatController.editCat);
router.delete("/:id", authorizeCat, CatController.deleteCat);

module.exports = router;
