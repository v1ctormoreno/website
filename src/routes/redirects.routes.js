const router = require('express').Router();
//const pool = require('../database');

router.get('/controlaccesos', (req, res) => {
    res.redirect('/projects');
})


module.exports = router;