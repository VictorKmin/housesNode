const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = (access_token) => {
    const TokenModel = db.getModel(DB_TABLES.OAUTH_TOKEN);

    TokenModel.destroy({
        where: { access_token }
    })
}
