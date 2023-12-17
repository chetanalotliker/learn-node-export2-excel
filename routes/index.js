var express = require('express');
const userController = require('../Controller/User')
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/downloadExcel', userController.exportUser2Excel);
router.get('/downloadXml', userController.exportUser2Xml)

module.exports = router;
