let express = require("express")
let router = express.Router()



/**
 * @api {get} /api/mobileoko/getHistoryBrowser Получение истории браузера[getHistoryBrowser]
 * @apiName  /api/soket/mobileoko/getHistoryBrowser Получение истории браузера[getHistoryBrowser]
 * @apiDescription getHistoryBrowser  Получение истории браузера
 * @apiGroup Browser
 @apiSampleRequest /api/soket/mobileoko/getHistoryBrowser
 * @apiHeader {String} auth_token Токен пользователя
 */

router.get('/', function (req, res) {
res.json({
    code:200,
    sucssec:true,
    data:{
        message:"Вы успешно получили список испории браузера"
    }


})
});


module.exports = router
