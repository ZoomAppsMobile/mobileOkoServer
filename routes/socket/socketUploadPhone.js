module.exports = function(io) {
    var app = require('express');
    var router = app.Router();

    /**
     * @api {get} /api/soket/mobileoko/uploadPhone Дынный метод выгружает все контакты да данном устройстве[uploadLocation]
     * @apiName  Дынный метод выгружает все контакты да данном устройстве[uploadLocation]
     * @apiDescription Данный метод определяем находит все контакты в смартфоне и отправляет на сервер
     * @apiGroup Phone
     @apiSampleRequest /api/soket/mobileoko/uploadPhone
     * @apiHeader {String} auth_token Токен пользователя
     */

    router.get('/', function (req, res) {
        res.json({
            sucsses:true,
            messege: "Вы успешно отправили запрос на выгрузку номеров телефона"
        });
        io.emit("phone", "");

    });


    return router;
}