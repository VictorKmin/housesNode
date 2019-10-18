const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = async status_id => {
    const HouseStatusModel = db.getModel(DB_TABLES.USER_STATUS);

    const status = await HouseStatusModel.findByPk(status_id);

    return status && status.dataValues;
}
