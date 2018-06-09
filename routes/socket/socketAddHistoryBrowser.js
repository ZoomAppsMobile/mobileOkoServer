module.exports = function (io) {
    var app = require('express');
    var router = app.Router();

    /**
     * @api {get} /api/soket/mobileoko/addHistoryBrowser Загрузка истории браузера через сокет[addHistoryBrowser]
     * @apiName Загрузка истории браузера через сокет[addHistoryBrowser]
     * @apiDescription Данный метод предназначен исключительно для отправки запросов на мобильное устаройтво, через админку, постман
     * @apiGroup Browser
     @apiSampleRequest /api/soket/mobileoko/addHistoryBrowser
     * @apiHeader {String} auth_token Токен пользователя
     */
     router.get('/', function (req, res) {
         res.json({
            sucsses:true,
            messege: "Вы успешно отправили запрос на выгрузку данных браузера"
        });
        io.emit("history_browser", "123");

    });


    return router;
}