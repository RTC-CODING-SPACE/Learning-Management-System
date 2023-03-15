var express = require('express');
var router = express.Router();
const db = require('./lib/database');
const utils = require('./lib/utility');

router.get('/test', async (req, res, next) => {
    // // let result = await db.executeQuery("SELECT * FROM users")
    // // console.log(result)
    // try {
    //     console.log(await db.insertQuery('users', [{email: "akld", password: "asdasdad2"}, {email: "akld", password: "asdasdad"}]))
    // } catch (err) {
    //     console.log(err)
    // }
    res.json({response: "test"})
})

// Sign up
router.post('/registration', async (req, res, next) => {
    req.body['password'] = await utils.passwordUtil.hashPassword(req.body['password']);
    const {email, password, title, first_name, last_name, role} = req.body;
    const users_query = {email, password};
    const users_information_query = {title, first_name, last_name, role};
    try {
        await db.insertQuery('users', [users_query]);
        db.executeQuery(`SELECT user_id FROM users WHERE email='${email}'`).then(async (value) => {
            users_information_query['user_id'] = value[0]['user_id'];
            await db.insertQuery('users_information', [users_information_query]);
        })
        return res.json({status: "success"});

    } catch (err) {
        console.log(err)
        return res.json({status: "failed", reason: err.code});
    }
});

// กำลังทำ
router.get('/login', async (req, res, next) => {
    // console.log(req.query)
    const {email, password} = req.query;
    try {
        let is_matched = db.executeQuery(`SELECT user_id, password, is_verified	 FROM users WHERE email='${email}'`).then(async (value) => {
            if (!await utils.passwordUtil.comparePassword(password, value[0]['password'])) return {status: "failed", reason: "email/password is incorrect."};
            if (value[0]['is_verified'] == 2) return {status: "failed", reason: "your account had been suspeneded."};
            return {status: "success"};
        })
        if (await is_matched.status == 'failed') return res.json(is_matched);
    } catch (err) {

    }
});

module.exports = router;