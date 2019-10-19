const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = (deleteObject) => {
    const TokenModel = db.getModel(DB_TABLES.OAUTH_TOKEN);

    TokenModel.destroy({
        where: deleteObject
    })
}
