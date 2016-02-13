var express    = require('express'),
    bodyParser = require('body-parser'),
    fs         = require('fs'),
    multer     = require('multer'),
    upload     = multer({
                  dest: 'uploads/'
                }),
	router     = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.post('/upload', upload.single('file'), function(req, res) {
  var fileInfo = {
      "name": req.file.originalname,
      "mime_type": req.file.mimetype,
      "size": req.file.size
  };
  
  fs.unlink(req.file.path, function(err) {
    if (err) {
      console.log('An error occurred: ' + err);
    }
    else {
      console.log('File was deleted');
    }
  });
  
  res.send(fileInfo);
});

module.exports = router;