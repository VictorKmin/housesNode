const {cityService} = require('../../service');
const ErrorHandler = require('../../error/ErrorHandler');

module.exports = async (req, res, next) => {

    const {city_id} = req.body;

    const city = await cityService.getCityById(city_id);
    
    if (!city) {
        return next(new ErrorHandler('City not found', 404, 'checkIsCityPresent'))
    }

    next()
}
