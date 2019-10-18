const {houseService} = require('../../service');
const ErrorHandler = require('../../error/ErrorHandler');

module.exports = async (req, res, next) => {

    const {status_id} = req.body;

    const status = await houseService.getStatusById(status_id);

    if (!status) {
        return next(new ErrorHandler('Status not found', 404, 'checkIsStatusPresent'))
    }

    next()
}
