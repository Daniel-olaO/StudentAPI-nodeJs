const jwt = require('jsonwebtoken');

module.exports = {
  generateId: function() {
    const id = Math.random().toString(36).substr(2, 9).toLocaleUpperCase();
    return id;
  },
  generateAccessToken: function(username) {
    return jwt.sign(username, process.env.JWT_SECRET, {expiresIn: '1h'});
  },
  generateRefreshAccessToken: function(username) {
    return jwt.sign(
        username,
        process.env.JWT_REFRESH_ACCESS_TOKEN,
        {expiresIn: '7d'},
    );
  },
};
