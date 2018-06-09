var express = require("express");
var multer  = require('multer');
var router = express.Router();
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/recorder/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + file.fieldname +".mp3")
    }
});
var upload = multer({storage: storage});

router.post('/', upload.array('recorder',10), function (req, res, next) {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any

    res.json({
        code: 200,
        data: {
            massage: "Все фотографии успешно загружены"

        }
    })



});

module.exports = router;