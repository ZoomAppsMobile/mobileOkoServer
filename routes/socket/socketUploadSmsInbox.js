module.exports = function(io) {
    var app = require('express');
    var router = app.Router();

    /**
     * @api {get} /api/soket/mobileoko/uploadSmsInbox Выгружает входящие сообщения на устройстве[addHistoryBrowser]
     * @apiName  /api/soket/mobileoko/uploadSmsInbox Выгружает входящие сообщения на устройстве[addHistoryBrowser]
     * @apiDescription Уходит запрос на устройство для выгрузки входящих - SMS
     * @apiGroup SMS
     @apiSampleRequest /api/soket/mobileoko/uploadSmsInbox
     * @apiHeader {String} auth_token Токен пользователя
     */


    router.get('/', function (req, res) {
        res.json({
            sucsses:true,
            messege: "Вы успешно отправили запрос на выгрузку входящих sms"
        });
        io.emit("smsInbox", "");

    });


    return router;
}