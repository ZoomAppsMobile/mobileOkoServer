module.exports = function(io) {
    var app = require('express');
    var router = app.Router();


    /**
     * @api {get} /api/soket/mobileoko/uploadLocation Определяет у смартфона данное место положение и отправляет на сервер[uploadLocation]
     * @apiName Определяет у смартфона данное место положение и отправляет на сервер[uploadLocation]
     * @apiDescription Данный метод определяем местоположение устройства и отпрвляем данные на сервер
     * @apiGroup Location
     @apiSampleRequest /api/soket/mobileoko/uploadLocation
     * @apiHeader {String} auth_token Токен пользователя
     */
    router.get('/', function (req, res) {
        res.json({
            sucsses:true,
            messege: "Вы успешно отправили запрос на выгрузку местоположения"
        });
        io.emit("location", "");

    });


    return router;
}