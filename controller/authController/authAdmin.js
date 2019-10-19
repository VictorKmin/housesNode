const {userService, oauthService} = require('../../service');
const ErrorHandler = require('../../error/ErrorHandler');
const {tokenizer, checkPasswordHash} = require('../../helpers');
const {USER_ROLES, USER_STATUS, JWT_METHOD} = require('../../constant');

module.exports = async (req, res) => {
    try {
        const {email, password} = req.body;

        const isUserPresent = await userService.getUserByParams({email, role_id: USER_ROLES.ADMIN});

        if (!isUserPresent) {
            throw new ErrorHandler('User is not present', 404, 'authAdmin');
        }

        if (isUserPresent.status_id !== USER_STATUS.ACTIVE) {
            throw new ErrorHandler('Account is blocked', 403, 'authAdmin');
        }

        await checkPasswordHash(isUserPresent.password, password);

        const tokens = tokenizer(JWT_METHOD.ADMIN);

        oauthService.insertTokenPair({
            user_id: isUserPresent.id,
            ...tokens
        });

        res.json(tokens)
    } catch (e) {
        res
            .status(e.status)
            .json({
                message: e.message,
                controller: e.controller || "authUser"
            })
    }
}
