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
        /* res.render(`pages/contact`); */
        /* tired of stupid spam email every day, changing this 29/12/2020 - i am already my own boss f*cking scammers */
        res.redirect('https://v1ctor.es');

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
router.get('/business', (req, res) => {
        res.render('pages/business');
})
router.get('/cv', (req, res) => {
        res.render('pages/cv');
})

module.exports = router;