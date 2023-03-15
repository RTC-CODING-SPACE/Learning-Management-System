var express = require('express');
var router = express.Router();

// Index page
router.get('/', (req, res, next) => {
    res.render('homepage');
});

// Sign in page
router.get('/login', (req, res, next) => {
    res.render('authen/login');
});

// Sign up page
router.get('/registration', (req, res, next) => {
    res.render('authen/registration');
});



module.exports = router;