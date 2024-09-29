const express = require('express')
const { authorize } = require('../utils')
const Pool = require('../database/pool')
const router = express.Router()

router.get('/', authorize, (req,res) => {
    Pool.query('SELECT * FROM USERS WHERE USERID=?', [res.user.userId])
    .then(result => {
        const { password, ...row } = result[0][0]
        res.status(200).json(row)
    })
})

router.get('/search/exact/:username', (req,res) => {
    Pool.query("SELECT userid, username, name FROM USERS WHERE USERNAME=?", [req.params.username])
    .then(result => {
        const row = result[0][0]
        res.status(200).json(row)
    })
})

module.exports = router