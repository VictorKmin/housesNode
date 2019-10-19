const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = async findObject => {
    const OauthModel = db.getModel(DB_TABLES.OAUTH_TOKEN);

    const user = await OauthModel.findOne({
        where: findObject,
        attributes: ['user_id']
    });

    return user && user.dataValues;
}
