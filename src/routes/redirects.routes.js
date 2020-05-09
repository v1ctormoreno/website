const router = require('express').Router();
//const pool = require('../database');

router.get('/controlaccesos', (req, res) => {
    res.redirect('https://github.com/v1ctormoreno/controlaccesos_arduino');
})


module.exports = router;