const router = require('express').Router();

router.get('/*', (req, res) => {
    res.render('pages/404')
})

module.exports = router;