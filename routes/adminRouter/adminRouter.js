const router = require('express').Router();

const {authController} = require('../../controller');

router.post('/auth/my-kitty-tom', authController.authAdmin);

module.exports = router;
