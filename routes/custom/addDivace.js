var express = require("express");
var router = express.Router();
/**
 * @api {post} /api/mobileoko/addDivace Добавления устройств для отслеживания[addDivace]
 * @apiName  Добавления устройств для отслеживания[addDivace]
 * @apiDescription Данный метод дает возможность добавить устройство для отслеживания
 * @apiGroup Divaces
 @apiSampleRequest /api/mobileoko/addDivace
 * @apiHeader {String} auth_token Токен пользователя
 * @apiParam{String} divace_name Имя устройства
 */
router.post('/', function (req, res) {
   var db = req.db;
   var auth_token  = req.header("auth_token");
   var divace_name = req.body.divace_name;

   if(auth_token == null || auth_token.toString().length < 3){
       res.json({
           code: 400,
           data: {
               massage: "ACCESS_TOKEN_INVALID"
           }
       })
   }else if(divace_name == null || divace_name.toString().length < 3){
       res.json({
           code: 400,
           data: {
               massage: "Укажите имя устройства"
           }
       })
   }else{
       db.collection("users").findOne({
           token:auth_token
       }, function (err, resultFindUser) {
           if(err){
               res.json({
                   code: 400,
                   data: {
                       massage: "Ошибка соеденения с базой данных"
                   }
               })
           }else{
               if(resultFindUser == null){
                   res.json({
                       code: 400,
                       data: {
                           massage: "ACCESS_TOKEN_INVALID ERROR возможно устарел"
                       }
                   })
               }else{
                   var objAddDivace = {
                       name_divace:divace_name,
                       token:auth_token,
                       ids:Math.floor(Math.random()*900000000000000000) + 10000,
                       activate:false
                   }

                   db.collection("divaces").insertOne(objAddDivace, function (err) {

                       if(err){
                           res.json({
                               code: 400,
                               data: {
                                   massage: "Ошибка соеденения с базой данных"
                               }
                           })
                       }else{
                           res.json({
                               code: 200,
                               data: {
                                   massage: "Вы успешно добавили устройство"
                               }
                           })
                       }
                   })
               }

           }


       })
       
       
   }


});

module.exports = router;