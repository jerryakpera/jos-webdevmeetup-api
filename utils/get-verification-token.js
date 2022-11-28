const jwt = require('jsonwebtoken');
const { tokenSecret } = require('../config');

module.exports.createJWTToken = (data, expiresIn) => {
  return jwt.sign(data, tokenSecret, {
    expiresIn: '1d',
  });
};

module.exports.verifyToken = (token) => {
  return jwt.verify(token, tokenSecret, (err, decoded) => {
    if (err) return false;

    return decoded;
  });
};
