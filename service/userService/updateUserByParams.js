const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = (paramsObject, findObject) => {
    const UserModel = db.getModel(DB_TABLES.USER);

    UserModel.update(paramsObject, {
        where: findObject
    })
}
