const { compare } = require("bcryptjs");
const { User } = require("../models");
const { signToken } = require("../helpers/jwt");

module.exports = class UserController {
  static async register(req, res, next) {
    try {
      const { email, password, passwordRepeat } = req.body;

      if (password !== passwordRepeat)
        throw { name: "Validate", message: "Password doesn't match" };

      const user = await User.create({
        email,
        password,
      });
      res.status(201).json({ email: user.email, message: "Register Success" });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) throw { name: "Validate", message: "Email is required" };
      if (!password) throw { name: "Validate", message: "Email is required" };

      const user = await User.findOne({ where: { email } });

      if (!user)
        throw { name: "Validate", message: "Email has not been registered" };

      const isValidPassword = compare(password, user.password);
      if (!isValidPassword)
        throw { name: "Validate", message: "Invalid password" };

      const token = signToken({ id: user.id });

      res.status(200).json({ access_token: token });
    } catch (err) {
      next(err);
    }
  }
};
