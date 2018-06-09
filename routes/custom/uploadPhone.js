var exspress = require("express")
var router = exspress.Router()

router.post('/', function (req, res) {
    var db = req.db;
    var token = req.header("auth_token");
    var phone = req.body.phone;
    var data
    var objPhone = {
        token: token,
        phone: {
            phone
        }
    }

    if (token == null) {
        res.json({
            code: 401,
            data: {
                massage: "ACCESS_TOKEN_INVALID"
            }
        })
    } else if (phone == null) {
        res.json({
            code: 400,
            data: {
                massage: "INVALID_INPUT_PARAMETER"
            }
        })
    } else {
        db.collection("listPhone").insertOne(objPhone, function (err) {
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
        })

    }

});


module.exports = router;
