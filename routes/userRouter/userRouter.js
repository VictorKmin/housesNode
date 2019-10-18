const router = require('express').Router();

const {userController} = require('../../controller');

router.post('/', userController.createUser);

module.exports = router;
