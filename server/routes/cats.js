const CatController = require("../controllers/CatController");

const router = require("express").Router();

router.get("/", CatController.findUserCats);
router.post("/", CatController.createCat);
router.put("/:id", CatController.editCat);
