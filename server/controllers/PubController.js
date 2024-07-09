const { Cat } = require("../models");

module.exports = class PubController {
  static async findAllCats(req, res, next) {
    try {
      const cats = await Cat.findAll();
      res.status(200).json({ cats });
    } catch (err) {
      next(err);
    }
  }
};
