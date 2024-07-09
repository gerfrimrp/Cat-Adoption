const { sign, verify } = require("jsonwebtoken");
const secret = "TEST_SECRET";

module.exports = {
  signToken: (payload) => sign(payload, secret),
  verifyToken: (token) => verify(token, secret),
};
