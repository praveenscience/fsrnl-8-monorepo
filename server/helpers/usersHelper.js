const crypto = require("crypto");
const hash = require("../constants/hash.json");

const hashPassword = password =>
  crypto
    .createHash("md5")
    .update(hash + password)
    .digest("hex");

module.exports = { hashPassword };
