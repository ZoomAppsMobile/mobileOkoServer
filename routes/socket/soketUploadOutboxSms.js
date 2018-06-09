module.exports = function(io) {
    var app = require('express');
    var router = app.Router();

    /**
     * @api {get} /api/soket/mobileoko/uplaodSmsOutbox Выгружает исходящие сообщения на устройстве[uplaodSmsOutbox]
     * @apiName  /api/soket/mobileoko/uplaodSmsOutbox Выгружает исходящие сообщения на устройстве[uplaodSmsOutbox]
     * @apiDescription Уходит запрос на устройство для выгрузки исходящие - SMS
     * @apiGroup SMS
     @apiSampleRequest /api/soket/mobileoko/uplaodSmsOutbox
     * @apiHeader {String} auth_token Токен пользователя
     */


    router.get('/', function (req, res) {
        res.json({
            sucsses:true,
            messege: "Вы успешно отправили запрос на выгрузку иcходящих sms"
        });
        io.emit("smsOutbox", "");

    });


    return router;
}