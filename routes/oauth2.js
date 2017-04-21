/*jshint esversion: 6 */
import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/authorize', function(req, res, next) {
    const auth = req.get("authorization");
    const token = auth ? auth.split(" ").pop() : undefined;
    const responseType = req.query.response_type;
    const clientId = req.query.client_id;
    const redirectUri = req.query.redirect_uri;

    console.log(`Authorize bearer ${token} client ${clientId} type ${responseType}`);
    res.redirect(`${redirectUri}?code=87654321`);
});

router.post('/token', function(req, res, next) {
    console.log(`POST request ${req}`);
    const clientId = req.body.client_id;
    const clientSecret = req.body.client_secret;
    const grantType = req.body.grant_type;
    const code = req.body.code;

    console.log(`Token post ${clientId}:${clientSecret} ${grantType} code ${code}`);
    res.json({
        "access_token": "___ACCESS_TOKEN___",
        "refresh_token": "___REFRESH_TOKEN___",
        "other_stuff": "___STUFF___"
    });
});

module.exports = router;