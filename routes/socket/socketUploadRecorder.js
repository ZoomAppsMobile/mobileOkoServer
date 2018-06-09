module.exports = function (io) {
    var app = require('express');
    var router = app.Router();


    /**
     * @api {get} /api/soket/mobileoko/socketUploadRecorder Включить диктофон[addHistoryBrowser]
     * @apiName  /api/soket/mobileoko/socketUploadRecorder Включить диктофон[addHistoryBrowser]
     * @apiDescription Данный метод включаем запись диктофона на данном устройсве
     * @apiGroup Recoreder
     @apiSampleRequest /api/soket/mobileoko/socketUploadRecorder
     * @apiHeader {String} auth_token Токен пользователя
     */

    router.get('/', function (req, res) {
        var swith = req.query.swith;
        if (swith == null) {
            res.json({
                code: 400,
                data: {
                    massage: "INVALID_INPUT_PARAMETER_SWITH"
                }
            })
        } else {
            io.emit("recorder", {recorder: swith});
            res.json({
                sucsses: true,
                messege: "Вы успешно отправили запрос на диктофонную запись"
            });
        }


    });


    return router;
}