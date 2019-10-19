const ErrorHandler = require('../../error/ErrorHandler');
const {tokenVerificator} = require('../../helpers');
const {JWT_METHOD} = require('../../constant');

module.exports = async (req, res, next) => {
    const token = req.get('Authorization');

    if (!token) {
        return next(new ErrorHandler('No token', 403, 'CheckAccessToken'))
    }

    tokenVerificator(token, JWT_METHOD.ADMIN);

    next()
}
