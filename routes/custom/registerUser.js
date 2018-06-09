var express = require('express');
var router = express.Router();
var randtoken = require('rand-token').generator();
var validator = require("email-validator");

var crypto = require('crypto');

/**
 * @api {post} /api/mobileoko/registerUser Регитсрация пользователей[registerUsers]
 * @apiName Регитсрация пользователей[addHistoryBrowser]
 * @apiGroup Users
 @apiSampleRequest /api/mobileoko/registerUser
 * @apiParam {String} email_user Email пользователя
 * @apiParam {String} password_user Пароль пользователя
 * @apiParam {String} arrow_password_user Подтверждение пароля пользователя
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
     "code": 200,
     "data": {
         "massage": "Вы успешно зарегистрировались"
     }
 }
 *
 * @apiError massage Ошибка соеденения с базой данных<br>
 * Укажите валидный email<br>
 * Пароли не совпадают<br>
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 {
     "code": 400,
     "data": {
         "massage": massage
     }
 }

 */
router.post('/', function (req, res) {
    var db = req.db;
    var token = randtoken.generate(125, "abcdefghijklnmopqrstuvwxyz+70702846994723");
    var email = req.body.email_user;
    var password = req.body.password_user;
    var arrow_password = req.body.arrow_password_user;
    if (!validator.validate(email)) {
        res.json({
            code: 400,
            data: {
                massage: "Укажите валидный email"
            }
        })
    } else if (password.toString().length < 8) {
        res.json({
            code: 400,
            data: {
                massage: "Пароль должен быть не менее 8-ми символов"
            }
        })
    } else if (password != arrow_password) {
        res.json({
            code: 400,
            data: {
                massage: "Пароли не совпадают"
            }
        })
    } else {
        db.collection("users").findOne({email_user: email}, function (err, resultFindEmail) {
            if (err) {
                res.json({
                    code: 400,
                    data: {
                        massage: "Ошибка соеденения с базой данных",
                    }
                })
            } else {
                if (resultFindEmail == null) {
                    var objRegisterUser = {
                        email_user: email,
                        password: crypto.createHash('md5').update(password).digest("hex"),
                        token: token,
                        name_user: null,
                        surname_user: null
                    };
                    db.collection("users").insertOne(objRegisterUser, function (err) {
                        if (err) {
                            res.json({
                                code: 400,
                                data: {
                                    massage: "Ошибка соеденения с базой данных",

                                }
                            })
                        } else {
                            res.json({
                                code: 400,
                                data: {
                                    massage: "Вы успешно зарегистрировались",

                                }
                            })
                        }
                    });
                } else {
                    res.json({
                        code: 400,
                        data: {
                            massage: "Пользователь с данным email-ом уже заригистрирован",

                        }
                    })
                }
            }

        });


    }


});
module.exports = router;