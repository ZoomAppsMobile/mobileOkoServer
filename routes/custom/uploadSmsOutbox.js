var express = require("express")
var router = express.Router()

router.post('/', function (req, res, next) {
    var db = req.db;
    var token = req.header("auth_token")
    var outboxSms = req.body.outboxSms;
    var objOutboxSms = {
        token:token,
        outboxSms:outboxSms
    };



    if(token == null){
        res.json({
            code: 401,
            data: {
                massage: "ACCESS_TOKEN_INVALID"
            }
        })
    }else if(outboxSms == null) {
        res.json({
            code: 400,
            data: {
                massage: "INVALID_INPUT_PARAMETER"
            }
        })
    } else{
        db.collection("listSmsOutbox").insertOne(objOutboxSms, function (err, result) {
            if(err){
                res.json({
                    code: 40197,
                    data: {
                        massage: "Служба столкнулась с ошибкой обработки вашего запроса. Пожалуйста, попробуйте еще раз."

                    }
                })
            }else{
                res.json({
                    code: 200,
                    data: {
                        massage: "Исходящие sms загружены"

                    }
                })
            }
        })
    }



});

module.exports = router;