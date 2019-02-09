const jwt = require('jsonwebtoken');
const secretWorld = require('../config/secrets').secret;
const refreshSecret = require('../config/secrets').refreshSecret;


module.exports = (id, email) => {
    const accessToken = jwt.sign({id}, secretWorld, {expiresIn: 9999999});
    const refreshToken = jwt.sign({id, email}, refreshSecret, {expiresIn: 999999999999});
    const tokens = {
        accessToken,
        refreshToken
    };
    if (!tokens) throw new Error('TOKEN WAS NOT CREATED');
    return tokens;
};
