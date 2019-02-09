const dataBase = require('../../dataBase').getInstance();
const tokinazer = require('../../helpers/tokinazer');
module.exports = async (req, res) => {
    try {

        const UserModel = dataBase.getModel('User');

        const {email, password} = req.body.userInfo;

        const user = await UserModel.findOne({
            where: {
                email,
                password
            }
        });

        if (!user) throw new Error('Bad credential');

        const {id} = user.dataValues;

        let {accessToken, refreshToken} = tokinazer(id, email);

        res.json({
            success: true,
            message: {
                accessToken,
                refreshToken
            }
        })
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }
};
