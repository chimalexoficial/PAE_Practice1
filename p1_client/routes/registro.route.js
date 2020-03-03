const router = require('express').Router();


router.get('/registro', (req,res,next) =>{
    res.render('registro')
})

module.exports = router;