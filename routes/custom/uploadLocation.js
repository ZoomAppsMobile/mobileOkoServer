var exspress = require("express")
var router = exspress.Router()
/**
 * @api {post} /api/mobileoko/uploadLocation Отпраляет устройсво запрос с координатами местороложения[uploadLocation_m]
 * @apiName  Отпраляет устройсво запрос с координатами местороложения[uploadLocation_m]
 * @apiDescription getHistoryBrowser  Данный метод отправляет устройсво автоматически после того как вы сделали запрос на данный url <code>/api/soket/mobileoko/uploadLocation</code>
 * @apiGroup Location
 @apiSampleRequest /api/soket/mobileoko/uploadLocation
 * @apiHeader {String} auth_token Токен пользователя
 */
router.post('/', function (req, res) {
    var db = req.db;
    var token = req.header("auth_token");
    var latitude = req.body.latitude;
    var longitude = req.body.longitude;
    var data
    var objLocation= {
        token: token,
        location: {
            latitude:parseFloat(latitude),
            longitude:parseFloat(longitude)
        }
    }

    if (token == null) {
        res.json({
            code: 401,
            data: {
                massage: "ACCESS_TOKEN_INVALID"
            }
        })
    } else if (latitude == null) {
        res.json({
            code: 400,
            data: {
                massage: "INVALID_INPUT_PARAMETER_LATITUBE"
            }
        })
    } else if (longitude == null) {
        res.json({
            code: 400,
            data: {
                massage: "INVALID_INPUT_PARAMETER_LONGITUBE"
            }
        })
    }else {
        db.collection("location").insertOne(objLocation, function (err) {
            if (err) {
                res.json({
                    code: 40197,
                    data: {
                        massage: "Служба столкнулась с ошибкой обработки вашего запроса. Пожалуйста, попробуйте еще раз."
                    }
                })
            } else {
                res.json({
                    code: 200,
                    data: {
                        massage: "Ваша локация успешно загружена"

                    }
                })
            }
        })

    }

});


module.exports = router;
