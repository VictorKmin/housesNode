const jwt = require('jsonwebtoken');

const {JWT_SECRET, JWT_METHOD} = require('../constant');

module.exports = method => {

    if (method === JWT_METHOD.ADMIN) {
        const access_token = jwt.sign({}, JWT_SECRET.ADMIN_ACCESS, {expiresIn: '24h'});
        const refresh_token = jwt.sign({}, JWT_SECRET.ADMIN_REFRESH, {expiresIn: '96h'});

        return {
            access_token,
            refresh_token
        }
    }

    if (method === JWT_METHOD.USER) {
        const access_token = jwt.sign({}, JWT_SECRET.ACCESS, {expiresIn: '24h'});
        const refresh_token = jwt.sign({}, JWT_SECRET.REFRESH, {expiresIn: '96h'});

        return {
            access_token,
            refresh_token
        }
    }

    throw new Error('Method for token is not valid')
};
