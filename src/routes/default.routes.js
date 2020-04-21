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

module.exports=router;