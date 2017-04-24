/*jshint esversion: 6 */

import request from 'superagent';
import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/redirect', function(req, res, next) {
    const code = req.query.code;
    console.log(`Redirect ${code}`);
    request.
    post(`http://localhost:${req.socket.localPort}/oauth2/token`).
    send("client_id=CLI123").
    send("client_secret=P855w0rd").
    send("grant_type=code").
    send(`code=${code}`).
    send("redirect_uri=/third-party/redirect").end((err, response) => {
        console.log(JSON.stringify(response.body));
        res.json(response.body);
    });
});

module.exports = router;