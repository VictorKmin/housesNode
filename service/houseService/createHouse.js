const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = houseObject => {
    const HouseModel = db.getModel(DB_TABLES.HOUSE);

    HouseModel.create(houseObject)
}
