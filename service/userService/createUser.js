const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = userObject => {
    const UserModel = db.getModel(DB_TABLES.USER);

    UserModel.create(userObject)
}
