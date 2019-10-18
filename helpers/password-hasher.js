const bcrypt = require('bcrypt');

module.exports = async (password) => {

    const hashedPassword = await bcrypt.hash(password, 10);

    return hashedPassword
}
