const crypto = require('crypto');

const generateUUID = () => {
  return crypto.randomBytes(16).toString('hex');
};

module.exports = generateUUID;