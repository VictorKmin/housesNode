const {authService, oauthService} = require('../../service');
const {tokenizer} = require('../../helpers');
const {JWT_METHOD} = require('../../constant');


module.exports = async (req, res) => {
    try {
        const token = req.get('Authorization');
        const {user_id} = req.user;
        const tokens = tokenizer(JWT_METHOD.USER);

        await authService.deleteTokenPairByParams({refresh_token: token});
        await oauthService.insertTokenPair({
            user_id,
            ...tokens
        });

        res.json(tokens);
    } catch (e) {
        res
            .status(e.status)
            .json({
                message: e.message,
                controller: e.controller || "refreshToken"
            })
    }
}
