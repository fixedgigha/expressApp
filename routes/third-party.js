const express = require('express');
const router = express.Router();

const Client = require('node-rest-client').Client;

const client = new Client();


/* GET users listing. */
router.get('/redirect', function(req, res, next) {
  const code = req.query.code;
  console.log(`Redirect ${code}`);
  const args = {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: {
      "client_id" : "CLI123",
      "client_secret" : "P855w0rd",
      "grant_type" : "code",
      "code" : code,
      "redirect_uri" : "/thrid-party/redirect"
    }
  };
  client.post(`http://localhost:${req.socket.localPort}/oauth2/token`, args, function(data, response){
    console.log(data);
    res.send(`Access Token ${data.access_token}`);
  });
  
});

module.exports = router;
