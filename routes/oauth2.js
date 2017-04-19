var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/authorize', function(req, res, next) {
  const responseType = req.query.response_type;
  const clientId = req.query.client_id;
  const redirectUri = req.query.redirect_uri;

  console.log(`Authorize client ${clientId} type ${responseType}`);
  res.redirect(`${redirectUri}?code=87654321`);
});

router.post('/token', function(req, res, next) {
  console.log(`POST request ${req}`);
  const clientId = req.query.client_id;
  const clientSecret = req.query.client_secret;
  const grantType = req.query.grant_type;
  const code = req.query.code;

  console.log(`Token post ${clientId}:${clientSecret} ${grantType} code ${code}`);
  res.json({
    "access_token" : "___ACCESS_TOKEN___",
    "refresh_token" : "___REFRESH_TOKEN___",
    "other_stuff" : "___STUFF___"
  });
});

module.exports = router;

