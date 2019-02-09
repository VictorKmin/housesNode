const router = require('express').Router();


const registerUser = require('../controllers/user/registerUser')
const loginUser = require('../controllers/user/loginUser')

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
