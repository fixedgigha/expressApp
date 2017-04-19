var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/redirect', function(req, res, next) {
  const code = req.param('code');
  console.log(`Redirected code ${code}`);
  res.send("Access token granted");      
});

module.exports = router;
