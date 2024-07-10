const { UserProfile } = require("../models");

module.exports = class UserProfileController {
  static async getUserProfile(req, res, next) {
    try {
      // console.log("test");
      const UserId = req.user.id;
      const profile = await UserProfile.findOne({ where: { UserId } });

      res.status(200).json({ profile });
    } catch (err) {
      next(err);
    }
  }
  static async createUserProfile(req, res, next) {
    try {
      // console.log("test");
      const UserId = req.user.id;
      const { fullName, address, phoneNumber } = req.body;
      const profile = await UserProfile.findOne({ where: { UserId } });

      if (profile) throw { name: "Conflict" };

      const userProfile = await UserProfile.create({
        fullName,
        address,
        phoneNumber,
        UserId,
      });

      res.status(201).json({ userProfile });
    } catch (err) {
      next(err);
    }
  }

  static async editUserProfile(req, res, next) {
    try {
      const UserId = req.user.id;
      const { fullName, address, phoneNumber } = req.body;

      const userProfile = await UserProfile.findOne({ where: { UserId } });

      const newUserProfile = await userProfile.update({
        fullName,
        address,
        phoneNumber,
      });

      res.status(200).json({ newUserProfile });
    } catch (err) {
      next(err);
    }
  }
};
