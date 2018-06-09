module.exports = function(io) {
    var app = require('express');
    var router = app.Router();
    router.get('/', function (req, res) {
        res.json({
            sucsses:true,
            messege: "Вы успешно отправили запрос на выгрузку номеров телефона"
        });
        io.emit("testSocket", "");

    });


    return router;
}