const ErrorHandler = require('../../error/ErrorHandler');
const {authService} = require('../../service');


module.exports = async (req, res, next) => {
    const token = req.get('Authorization');

    if (!token) {
        return next(new ErrorHandler('No token', 403, 'CheckAccessToken'))
    }

    // TODO check token validity

    const userFromAccessToken = await authService.getUserFromAccessToken(token);

    if (!userFromAccessToken) {
        return next(new ErrorHandler('No user', 404, 'CheckAccessToken'))
    }

    req.user = userFromAccessToken;

    next()
}
