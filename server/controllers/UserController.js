const { compare } = require("bcryptjs");
const { User } = require("../models");
const { signToken } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client();

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

  static async loginGoogle(req, res, next) {
    try {
      const ticket = await client.verifyIdToken({
        idToken: req.body.googleToken,
        audience:
          "995144406817-n255g16hc2asv1sc4o9a1k9ob5lu1gpj.apps.googleusercontent.com", // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      const payload = ticket.getPayload();
      //   const userid = payload["sub"];

      const [user, created] = await User.findOrCreate({
        where: { email: payload.email },
        hooks: false,
        defaults: {
          userName: payload.name,
          email: payload.email,
          password: Math.random().toString(),
        },
      });
      // If the request specified a Google Workspace domain:
      // const domain = payload['hd'];
      const token = signToken({ id: user.id });
      res.status(created ? 201 : 200).json({ access_token: token });
    } catch (err) {
      next(err);
    }
  }
};
