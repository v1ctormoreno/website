const router = require('express').Router();
//const pool = require('../database');

router.get("/controlaccessos", (req, res) => {
  res.redirect("https://github.com/v1ctormoreno/controlaccesos_arduino");
});
router.get('/dhosting', (req, res) => {
    res.redirect('https://dinahosting.com/?affref=5EC2BB8568FF7&utm_affcmpgn=webpersonal');
})
router.get('/bookameeting', (req, res) => {
    res.redirect('https://victormoreno.youcanbook.me/');
})


module.exports = router;