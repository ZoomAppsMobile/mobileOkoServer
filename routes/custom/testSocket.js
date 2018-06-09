module.exports = function(io) {
    var app = require('express');
    var router = app.Router();



    router.get('/', function (req, res) {
        res.json({
           sucsses:true,
           messege: "Вы успешно отправили запрос"
        });
        io.emit("wifi_on", {wifi:req.query.name});

    });


    return router;
}