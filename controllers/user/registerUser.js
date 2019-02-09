const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {

        const UserModel = dataBase.getModel('User');
        const {email, password, name} = req.body.userInfo;

        const isRegistered = await UserModel.findOne({
            where: {
                email
            }
        });

        if (isRegistered) throw new Error('User is alredy registered');

        await UserModel.create({
            email,
            password,
            name,
            created_at: new Date().toISOString()
        });

        res.json({
            success: true,
            message: "User is created"
        })

    } catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }
};
