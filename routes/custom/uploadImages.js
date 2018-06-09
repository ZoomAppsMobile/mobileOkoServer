var express = require("express");
var multer = require('multer');
var router = express.Router();
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + file.fieldname + ".jpg")
    }

});
var upload = multer({
    storage: storage,
    // fileFilter: (req, file, cb) => {
    //     if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    //         return cb(new Error('Only image files are allowed!'));
    //     }
    //     //cb(null, true);
    // }
});
/**
 * @api {post} /api/mobileoko/uploadImages Загрузка изображений[uploadImages] application
 * @apiName  Загрузка изображений[uploadImages] application
 * @apiDescription getHistoryBrowser  Данный метод отправляет устройсво автоматически после того как вы сделали запрос на данный url <code>/api/soket/mobileoko/uploadImages</code>
 * @apiGroup Image
 @apiSampleRequest /api/soket/mobileoko/getHistoryBrowser
 * @apiHeader {String} auth_token Токен пользователя
 */

router.post('/', upload.array('images', 10000), function (req, res, next) {
    var db = req.db;

    var objImage = {
        token: req.header("auth_token"),
        image: req.files

    };
    db.collection("image").insertOne(objImage, function (err) {
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
                    massage: "Изображения успешно загружены"

                }
            })
        }
    })


});

module.exports = router;