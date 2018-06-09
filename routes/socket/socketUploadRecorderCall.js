module.exports = function (io) {
    var app = require('express');
    var router = app.Router();

    /**
     * @api {get} /api/soket/mobileoko/socketUploadRecorderCall Включить диктофон во время звонка[socketUploadRecorderCall]
     * @apiName  /api/soket/mobileoko/socketUploadRecorderCall Включить диктофон во время звонка[socketUploadRecorderCall]
     * @apiDescription Данный метод включаем запись диктофона во время звонка  на данном устройсве
     * @apiGroup Recoreder
     @apiSampleRequest /api/soket/mobileoko/socketUploadRecorder
     * @apiHeader {String} auth_token Токен пользователя
     */

    router.get('/', function (req, res) {
        var swith = req.query.swith;
        var path = req.query.path;

        if (swith == null) {
            res.json({
                code: 400,
                data: {
                    massage: "INVALID_INPUT_PARAMETER_SWITH"
                }
            })
        }else if(path == null){
            res.json({
                code: 400,
                data: {
                    massage: "INVALID_INPUT_PARAMETER_PATH"
                }
            })
        } else {
            io.emit("recorderCall", {recorder: swith, path:path});
            res.json({
                sucsses: true,
                messege: "Вы успешно отправили запрос на диктофонную запись звонка"
            });
        }


    });


    return router;
}