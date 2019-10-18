const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = async city_id => {
    const CityModel = db.getModel(DB_TABLES.CITY);

    const city = await CityModel.findByPk(city_id);

    return city && city.dataValues;
}
