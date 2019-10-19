const {userService} = require('../../service');
const ErrorHandler = require('../../error/ErrorHandler');

module.exports = async (req, res, next) => {
    const {user_id} = req.params;

    const user = await userService.getUserById(user_id);

    if (!user) {
        return next(new ErrorHandler('No user', 404, 'CheckAccessToken'))
    }

    req.user = user;

    next()
}
