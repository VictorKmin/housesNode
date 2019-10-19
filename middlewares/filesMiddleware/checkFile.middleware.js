const {FILES_CHECK} = require('../../constant');
const ErrorHandler = require('../../error/ErrorHandler');

module.exports = (req, res, next) => {

    req.photos = [];
    req.docs = [];

    if (!req.files) {
        next()
    }

    const files = Object.values(req.files);

    for (let i = 0; i < files.length; i++) {
        const {mimetype, size, name} = files[i];

        if (FILES_CHECK.PHOTO_MIMETYPES.includes(mimetype)) {

            if (FILES_CHECK.MAX_PHOTO_SIZE < size) {
                return next(new ErrorHandler(
                    `Max file size is ${FILES_CHECK.MAX_PHOTO_SIZE / (1024 * 1024)}mb`,
                    400,
                    'photoFileChecker')
                )
            }

            req.photos.push(files[i])

        } else if (FILES_CHECK.DOC_MIMETYPES.includes(mimetype)) {

            if (FILES_CHECK.MAX_DOC_SIZE < size) {
                return next(new ErrorHandler(
                    `Max file size is ${FILES_CHECK.MAX_PHOTO_SIZE / (1024 * 1024)}mb`,
                    400,
                    'photoFileChecker')
                )
            }

            req.docs.push(files[i])

        } else {
            next(new ErrorHandler(`File ${name} is not valid`, 400, 'photoFileChecker'))
        }
    }
    next()
}

