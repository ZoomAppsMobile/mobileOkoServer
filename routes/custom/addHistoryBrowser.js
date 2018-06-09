var express = require("express");
var router = express.Router()

/**
 * @api {post} /api/mobileoko/addHistoryBrowser Загрузка истории браузера на сервер[addHistoryBrowser]
 * @apiName Загрузка истории браузера на сервер[addHistoryBrowser]
 * @apiGroup Browser
   @apiSampleRequest /api/mobileoko/addHistoryBrowser
 * @apiParam {String} auth_token Токен пользователя

 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "code": 200,
 *       "massage": "История браузера загружена"
 *     }
 *
 * @apiError massage Служба столкнулась с ошибкой обработки вашего запроса. Пожалуйста, попробуйте еще раз.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *       "code":400,
 *       "massage": massage
 *     }
 *
 *      * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Not Found
 *     {
 *       "code":401,
 *       "massage": massage
 *     }
 */


router.post('/', function (req, res, next) {
    var db = req.db
    var token = req.header("auth_token")
    var historyBrowserContant = req.body.history_content;

    if (token != null) {
        var addHistoryBrowserObject = {
            token: token,
            data: {
                historyBrowserContant
            }
        };

        db.collection("historyBrower").insertOne(addHistoryBrowserObject, function (err, result) {
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
                        massage: "История браузера загружена"

                    }
                })


            }

        });
    } else {
        res.json({
            code: 401,
            data: {
                massage: "ACCESS_TOKEN_INVALID"
            }
        })
    }

})

module.exports = router