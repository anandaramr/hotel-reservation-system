const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Pool = require('../database/pool')
const { authorize } = require('../utils')
const router = express.Router()
require('dotenv').config()

router.post('/signup', async (req,res) => {
    if(req.body.username.length<3) return res.status(400).json({ error: "Username field should have atleast 3 characters"})
    if(req.body.password.length<4) return res.status(400).json({ error: "Password field should have atleast 4 characters"})

    const username = req.body.username
    bcrypt.hash(req.body.password, 10, (err, password) => {
        if(err) return res.status(500).json({ err });

        Pool.query(`INSERT INTO USERS(username, password) values(?,?)`, [ username, password ])
        .then(result => {
            const data = { userId: result[0].insertId, username }
            const accessToken = getAccessToken(data)
            const refreshToken = getRefreshToken(data)
            res.status(201).json({ accessToken, refreshToken })
        })
        .catch(err => res.status(400).json({ message: err.message }))
    })

})

router.post('/login', async (req,res) => {
    const username = req.body.username
    const password = req.body.password

    const [[user]] = await Pool.query('SELECT * FROM USERS WHERE USERNAME=?;', [username])
    if(!user) return res.status(200).json({ error: "User not found" });

    bcrypt.compare(password, user.password, async (err, result) => {
        if(err) return res.status(500).json({ error: "Server error" })
        if(!result) return res.status(200).json({ error: "Wrong Password" });

        const data = { userId: user.userid, username: user.username }
        const accessToken = getAccessToken(data)
        const refreshToken = await getRefreshToken(data)
        res.status(201).json({ accessToken, refreshToken })
    })
})

router.post('/refresh', (req,res) => {
    const token = req.body.token
    if(!token) return res.status(400).json({ error: "Token not found" });``

    Pool.query('DELETE FROM TOKENS WHERE TOKEN=?', [token])
    .then((result) => {
        if(result[0].affectedRows==0) return res.status(403).json({ error: "invalid refresh token" })
            jwt.verify(token, process.env.REFRESHKEY, async (err, result) => {
        if(err) return res.status(403).json({ error: err.message });
        
        const { userId, username } = result
        const accessToken = getAccessToken({ userId, username })
        const refreshToken = await getRefreshToken({ userId, username })
        res.status(201).json({ accessToken, refreshToken })
    })
})
})

router.post('/logout', authorize, (req,res) => {
    const token = req.body.token
    if(!token) return res.status(400).json({ error: "Token not found" });
    
    jwt.verify(token, process.env.REFRESHKEY, (err,user) => {
        if(err || user?.username!=res.user.username) return res.status(403).json({ error: "Unauthorized access" });
    
        Pool.query('DELETE FROM TOKENS WHERE TOKEN=?', [token])
        .then(result => {
            const tokenExists = result[0].affectedRows!=0
            if(!tokenExists) return res.status(201).json({ error: "Invalid session" });
            res.status(201).json({ message: "Logged out successfully" })
        })
    })
})

function getAccessToken(data) {
    return jwt.sign(data, process.env.ACCESSKEY, { expiresIn: '5s' })
}

async function getRefreshToken(data) {
    const token =  jwt.sign(data, process.env.REFRESHKEY, { expiresIn: '1d' })
    return await Pool.query('INSERT INTO TOKENS VALUES(?)', [token])
    .then(() => token)
}

module.exports = router