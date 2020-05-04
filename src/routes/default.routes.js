const router = require('express').Router();
//const pool = require('../database');

router.get('/', (req, res) => {
        res.render(`pages/index`);
});
router.get('/uses', (req, res) => {
        res.render(`pages/uses`);

})
router.get('/about', (req, res) => {
        res.render(`pages/about`);

})
router.get('/contact', (req, res) => {
        res.render(`pages/contact`);

})
router.get('/projects', (req, res) => {
        res.render('pages/projects');
})
router.get('/cookies', (req, res) => {
        res.render('pages/cookies');
})
router.get('/donations', (req, res) => {
        res.render('pages/donations')
})
router.get('/donations/btc', (req, res) => {
        res.render('pages/btc');
})
router.get('/contactbusiness', (req, res) => {
        res.render('pages/contactbusiness');
})
router.get('/*', (req, res) => {
        res.render('pages/404')
})
module.exports = router;