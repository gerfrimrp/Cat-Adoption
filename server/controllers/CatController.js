const { Cat } = require("../models");

module.exports = class CatController {
  static async findUserCats(req, res, next) {
    try {
      const UserId = req.user.id;
      const cats = await Cat.findAll({ where: { UserId } });
      if (!cats) throw { name: "NotFound", message: "Cat Not found" };

      res.status(200).json({ cats });
    } catch (err) {
      next(err);
    }
  }
  static async createCat(req, res, next) {
    try {
      const UserId = req.user.id;
      const { name, breed, age, gender, description } = req.body;
      const cats = await Cat.create({
        name,
        breed,
        age,
        gender,
        description,
        UserId,
      });
      res.status(201).json({ cats });
    } catch (err) {
      next(err);
    }
  }

  static async editCat(req, res, next) {
    const { id } = req.params;
    try {
      const cat = await Cat.findByPk(id);
      if (!cat) throw { name: "NotFound", message: "Cat Not found" };

      const updateCat = await cat.update({
        name,
        breed,
        age,
        gender,
        description,
      });
      res.status(200).json({ updateCat });
    } catch (err) {
      next(err);
    }
  }
};
