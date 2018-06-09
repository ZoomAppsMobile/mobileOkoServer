module.exports = function(io) {
    var app = require('express');
    var router = app.Router();


    /**
     * @api {get} /api/soket/mobileoko/uploadImages Скачивает фото с телефона и помещает в папку images[uploadImages]
     * @apiName Скачивает фото с телефона и помещает в папку images[uploadImages]
     * @apiDescription Данный метод предназначен исключительно для отправки запроса на мобильное для того чтобы скачать изображения сделанные с камеры
     * @apiGroup Image
     @apiSampleRequest /api/soket/mobileoko/uploadImages
     * @apiHeader {String} auth_token Токен пользователя
     */
    router.get('/', function (req, res) {
        res.json({
            sucsses:true,
            messege: "Вы успешно отправили запрос на выгрузку изображений"
        });
        io.emit("images", "");

    });


    return router;
}