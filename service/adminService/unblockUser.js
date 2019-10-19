const db = require('../../dataBase').getInstance();
const {DB_TABLES, USER_STATUS} = require('../../constant');

module.exports = (user_id) => {
    const UserModel = db.getModel(DB_TABLES.USER);

    UserModel.update({
        status_id: USER_STATUS.ACTIVE
    }, {
        where: {
            id: user_id
        }
    })
};
