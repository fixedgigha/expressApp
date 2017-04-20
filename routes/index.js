/*jshint esversion: 6 */
import express from 'express';
const router = express.Router();
console.log(`I have a router ${router}`);
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;