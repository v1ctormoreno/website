const router = require('express').Router();
//const pool = require('../database');

router.get('/controlaccesos', (req, res) => {
    res.redirect('https://github.com/v1ctormoreno/controlaccesos_arduino');
})
router.get('/referidodhosting', (req, res) => {
    res.redirect('https://dinahosting.com/?affref=5EC2BB8568FF7');
})


module.exports = router;