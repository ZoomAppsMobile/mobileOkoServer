var express = require('express');
var router = express.Router();
var validator = require("email-validator");
var crypto = require('crypto');

/**
 * @api {get} /api/mobileoko/authUser Авторизация пользователей[authUser]
 * @apiName Авторизация пользователей[authUser]
 * @apiGroup Users
 @apiSampleRequest /api/mobileoko/authUser
 * @apiParam {String} email_user Email пользователя
 * @apiParam {String} password Пароль пользователя
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
     "code": 200,
     "data": {
         "user": {
             "_id": "5afc14f59fc5da1448ec710f",
             "email_user": "123@mail.ru",
             "password": "25d55ad283aa400af464c76d713c07ad",
             "token": "gfv+rs7xo78z2t0va0ag036yo09x40p77pbm44cnni9wrktqlah4qm49i67kqrnvgvxuy8a9t0ftg04fxuy77fzr9vaetddiy2lut29orrvxvn9408ogptspw92+t",
             "name_user": null,
             "surname_user": null
         }
     }
 }
 *
 * @apiError massage Ошибка соеденения с базой данных<br>
 * Укажите валидный email<br>
 * Не верный логин или пароль<br>
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 {
     "code": 400,
     "data": {
         "massage": massage
     }
 }

 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 Not Found
 {
     "code": 200,
     "data": {
         "massage": massage
     }
 }

 */
router.get('/', function (req, res) {
     var db = req.db;
     var email = req.query.email_user;
     var password = req.query.password;

     if(!validator.validate(email)){
         res.json({
             code: 400,
             data: {
                 massage: "Укажите валидный email"
             }
         })
     }else if(password == null || password.toString().length < 3){
         res.json({
             code: 400,
             data: {
                 massage: "Укажите пароль"
             }
         })
     }else{
         var objSearchUser = {
             email_user : email
           //  password : crypto.createHash('md5').update(password).digest("hex")
         }



         db.collection('users').aggregate([
             {
                 $match:
                     {email_user : email,
                         password: crypto.createHash('md5').update(password).digest("hex")
                     }
             },
             {
                 $lookup:
                     {
                         from: 'divaces',
                         localField: 'token',
                         foreignField: 'token',
                         as: 'divaces'
                     }
             }


         ]).toArray(function (err, result) {
             if(result.length == 0){
                 res.json({
                     code: 200,
                     data: {
                         massage: "Не верный логин или пароль"
                     }
                 })
             }else{
                 res.json({
                     code: 200,
                     data: {
                         user: result
                     }
                 })
             }


         })



     }


});

module.exports = router;