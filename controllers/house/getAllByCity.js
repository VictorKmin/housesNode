const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {

        const HouseModel = dataBase.getModel('House');
        if (!HouseModel) throw new Error('Base not connected');

        const city = req.params.city;
        if (!city) throw new Error('Bad request');

        const houses = await HouseModel.findOne({
            where: {
                city
            }
        });

        if (!houses) throw new Error('Not found');

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
