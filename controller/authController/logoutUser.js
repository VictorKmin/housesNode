const {authService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const token = req.get('Authorization');

        await authService.deleteTokenPairByParams({access_token: token});

        res.end();
    } catch (e) {
        res
            .status(e.status)
            .json({
                message: e.message,
                controller: e.controller || "authUser"
            })
    }
}
