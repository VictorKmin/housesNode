const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = async user_id => {
    const UserModel = db.getModel(DB_TABLES.USER);

    const user = await UserModel.findByPk(user_id, {
        attributes: ['id', 'email', 'role_id', 'status_id']
    });

    return user && user.dataValues;
}
