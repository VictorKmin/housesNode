const jwt = require('jsonwebtoken');
module.exports = (token, secretWorld) => {
    let user = null;

    if (!token || !secretWorld) throw new Error('Have not token or secret word');

    jwt.verify(token, secretWorld, (err, decoded) => {
        if (err) throw new Error(err.message);
        user = {
            id: decoded.id,
            email: decoded.email,
        }
    });
    console.log(user);
    if (!user) throw new Error('DON\'T HACK MY SITE');

    return user
};
