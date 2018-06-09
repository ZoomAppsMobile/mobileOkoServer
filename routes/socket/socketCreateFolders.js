module.exports = function (io) {
    var app = require('express');
    var router = app.Router();

    /**
     * @api {get} /api/soket/mobileoko/createFolders Создает файл на устройстве[createFolders]
     * @apiName Создает файл на устройстве[createFolders]
     * @apiDescription Создает файл на устройстве, для того чтобы загрузать файлы, диктофонную запись, телефонную запись и т.д
     * @apiGroup Folder
     @apiSampleRequest /api/soket/mobileoko/createFolders
     * @apiHeader {String} auth_token Токен пользователя

     */
    router.get('/', function (req, res) {
        var nameFolder = req.query.nameFolder;
        if (nameFolder == null) {
            res.json({
                code: 400,
                data: {
                    massage: "INVALID_INPUT_PARAMETER_NAMEFOLDER"
                }
            })
        } else {
            io.emit("createFolders", {nameFolder: nameFolder});
            res.json({
                sucsses: true,
                messege: "Вы успешно создали каталог"
            });
        }


    });


    return router;
}