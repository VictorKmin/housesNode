const fs = require('fs-extra');
const {resolve} = require('path');
const uuid = require('uuid').v1();

const {userService} = require('../../service');
const {USER_ROLES, USER_STATUS} = require('../../constant');
const {passwordHasher} = require('../../helpers');

module.exports = async (req, res) => {
    try {
        const user = req.body;
        const [photo] = req.photos;
        const appRoot = global.appRoot;

        user.role_id = USER_ROLES.USER;
        user.status_id = USER_STATUS.ACTIVE;
        user.password = await passwordHasher(user.password);

        const {id} = await userService.createUser(user);

        const photoDir = `user/${id}/photos`;
        const photoExtension = photo.name.split('.').pop();
        const photoName = `${uuid}.${photoExtension}`;

        await fs.mkdirSync(resolve(appRoot, 'public', photoDir), {recursive: true});

        await photo.mv(resolve(appRoot, 'public', photoDir, photoName));

        await userService.updateUserByParams({photo_path: `${photoDir}/${photoName}`}, {id});
        res.status(201).end();
    } catch (e) {
        res
            .status(e.status)
            .json({
                message: e.message,
                controller: e.controller
            })
    }
}
