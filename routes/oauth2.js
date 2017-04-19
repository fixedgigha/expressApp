var express = require('express');
var router = express.Router();

/* OAUTH2 authorize */
router.get('/authorize', function(req, res, next) {
  const responseType = req.param('response_type');
  const clientId = req.param('client_id');
  const redirect = req.param('redirect_uri');      
  console.log(`Requested authorization clientID ${clientId} ${responseType}`);      
  res.redirect(redirect + "?code=URAUTHCODE");
         
});

module.exports = router;
