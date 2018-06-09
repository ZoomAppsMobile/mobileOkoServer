var express = require("express");
var router = express.Router();
/**
 * @api {get} /api/mobileoko/activateDivace Активация устройства для отслеживания[activateDivace]
 * @apiName Активация устройства для отслеживания[activateDivace]
 * @apiDescription Данная операция предназначина для <code>БЕЗОПАСНОСТИ!!!</code> чтобы не кто другой не мог отследить данные на вашем устройстве. После таго как вы активировали
 * устройство, вы должны скрыть значек на мобильно устройстве по ответу code 200
 * @apiGroup Divaces
   @apiSampleRequest /api/mobileoko/activateDivace
 * @apiParam {Integer} ids_code IDS code

 */
router.get('/', function (req, res) {
    var db = req.db;
    var ids = parseInt(req.query.ids_code);

   if(ids == null || ids.toString().length < 3){
       res.json({
           code:400,
           data:{
               massage:"Укажите IDS code для активации устройства"
           }
       })
   }else{
       db.collection("divaces").findOne({ids:ids }, function (err, resultIDS) {
           if(err){
               res.json({
                   code: 400,
                   data: {
                       massage: "Ошибка соеденения с базой данных"
                   }
               })
           }else{
               if(resultIDS == null){
                   res.json({
                       code: 400,
                       data: {
                           massage: "Данного IDS не существует"
                       }
                   })
               }else if(resultIDS.activate == true){
                   res.json({
                       code: 400,
                       data: {
                           massage: "Вы уже активировали устройство"
                       }
                   })
               }else{
                   var myquery = { ids:ids };
                   var newvalues = { $set: {activate: true}};
                   db.collection("divaces").updateOne(myquery, newvalues, function(err) {
                       if (err){
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
                                   massage: "Вы успешно активировали устройство"
                               }
                           })
                       }

                   });
               }
           }
       })
   }


});

module.exports = router;