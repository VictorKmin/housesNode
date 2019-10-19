const {adminService} = require('../../service');
const {USER_STATUS} = require('../../constant');
const ErrorHandler = require('../../error/ErrorHandler');

module.exports = async (req, res) => {
    try {
        const {id, status_id} = req.user;

        if (status_id === USER_STATUS.ACTIVE) {
            throw new ErrorHandler(`You can't unblock already active user`, 403, 'adminUnblockUser')
        }

        await adminService.unblockUser(id);

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
