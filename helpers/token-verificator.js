const jwt = require('jsonwebtoken');

const {JWT_SECRET, JWT_METHOD} = require('../constant');
const ErrorHandler = require('../error/ErrorHandler');

module.exports = (token, method) => {

    if (method === JWT_METHOD.ADMIN) {
        jwt.verify(token, JWT_SECRET.ADMIN_ACCESS, err => {
            if (err) {
                throw new ErrorHandler('Token is not valid', 403, 'token-verificator')
            }
        })
    }

    if (method === JWT_METHOD.USER) {
        jwt.verify(token, JWT_SECRET.ACCESS, err => {
            if (err) {
                throw new ErrorHandler('Token is not valid', 403, 'token-verificator')
            }
        })
    }
}
