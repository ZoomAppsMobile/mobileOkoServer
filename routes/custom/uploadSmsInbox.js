var express = require("express");
var router = express.Router()

router.post('/', function (req, res) {
    var db = req.db;
    var token = req.header("auth_token");
    var smsInbox = req.body.smsInbox
    var objSms = {
        token:token,
        smsInbox:smsInbox+'\n'
    }


    if(token == null){
        res.json({
            code: 401,
            data: {
                massage: "ACCESS_TOKEN_INVALID"
            }
        })
    }else if(smsInbox == null){
        res.json({
            code: 400,
            data: {
                massage: "INVALID_INPUT_PARAMETER"
            }
        })
    }else{
        db.collection("listSmsInbox").insertOne(objSms, function (err, result) {
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
                        massage: "Входящие sms загружены"

                    }
                })
            }
        })
    }




});

module.exports = router
