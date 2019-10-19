const ErrorHandler = require('../../error/ErrorHandler');
const {authService} = require('../../service');

module.exports = async (req, res, next) => {
    const token = req.get('Authorization');

    const userFromAccessToken = await authService.getUserFromTokenByParams({access_token: token});

    if (!userFromAccessToken) {
        return next(new ErrorHandler('No user', 404, 'getUserFromAccess'))
    }

    req.user = userFromAccessToken;

    next()
}
