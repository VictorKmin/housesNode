const router = require('express').Router();

const {authController} = require('../../controller');
const {authMiddleware} = require('../../middlewares');

router.post('/', authController.authUser);
router.post('/logout', authMiddleware.checkAccessTokenMiddleware, authController.logoutUser);

module.exports = router;
