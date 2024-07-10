const { compare } = require("bcryptjs");
const { User, UserProfile } = require("../models");
const { signToken } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client();
const clientId = process.env.GOOGLE_CLIENT_ID;

module.exports = class UserController {
  static async register(req, res, next) {
    try {
      const { userName, email, password, confirmPassword } = req.body;

      if (password !== confirmPassword)
        throw { name: "Validate", message: "Password doesn't match" };

      const user = await User.create({
        userName,
        email,
        password,
      });

      res.status(201).json({
        username: user.userName,
        email: user.email,
        message: "Register Success",
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) throw { name: "Required", message: "Email is required" };
      if (!password) throw { name: "Required", message: "Email is required" };

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
        audience: clientId, // Specify the CLIENT_ID of the app that accesses the backend
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
