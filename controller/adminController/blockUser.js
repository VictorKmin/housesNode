const {adminService, authService} = require('../../service');
const {USER_STATUS} = require('../../constant');
const ErrorHandler = require('../../error/ErrorHandler');

module.exports = async (req, res) => {
    try {
        const {id, status_id} = req.user;

        if (status_id === USER_STATUS.BLOCKED) {
            throw new ErrorHandler(`You can't block already blocked user`, 403, 'adminBlockUser')
        }

        await adminService.blockUser(id);
        await authService.deleteTokenPairByParams({user_id: id});
        res.end()
    } catch (e) {
        res
            .status(e.status)
            .json({
                message: e.message,
                controller: e.controller
            })
    }
}
