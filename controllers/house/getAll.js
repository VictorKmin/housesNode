const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {

        const HouseModel = dataBase.getModel('House');
        if (!HouseModel) throw new Error('Base not connected');

        const houses = await HouseModel.findAll({});

        res.json({
            success: true,
            message: houses
        })

    }  catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }
};
