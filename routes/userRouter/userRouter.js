const router = require('express').Router();

const {userController} = require('../../controller');
const {filesMiddleware} = require('../../middlewares');

router.post(
    '/',
    filesMiddleware.checkFileMiddleware,
    filesMiddleware.heckUserFilesCountMiddleware,
    userController.createUser);

module.exports = router;
