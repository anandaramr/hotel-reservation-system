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

router.post('/review', authorize, (req,res) => {
    const text = req.body.text
    if(!text) return res.status(400).json({ error: "Text not found" });

    Pool.query('INSERT INTO REVIEWS(USERID, TEXT) VALUES (?,?)', [res.user.userId, text])
    .then(result => {
        res.status(201).json(result)
    })
})

router.get('/review', (req,res) => {
    const { username } = req.query

    Pool.query(`SELECT U.userId, U.username, R.text FROM (REVIEWS R JOIN USERS U ON R.USERID=U.USERID) ${username ? 'WHERE U.USERNAME!=?' : ''}`, [username])
    .then(result => {
        res.status(200).json(result[0])
    })
})

module.exports = router