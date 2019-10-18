const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = async access_token => {
    const OauthModel = db.getModel(DB_TABLES.OAUTH_TOKEN);
    const UserModel = db.getModel(DB_TABLES.USER);

    const user = await OauthModel.findOne({
        where: {
            access_token
        },
        include: [{
            model: UserModel,
            attributes: ['email', 'role_id', 'status_id']
        }],
        attributes: ['user_id']
    });

    return user && user.dataValues;
}
