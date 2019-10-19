const {DB_TABLES} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = (tokenObject) => {
    const OAuthModel = db.getModel(DB_TABLES.OAUTH_TOKEN);

    OAuthModel.create(tokenObject)
}
