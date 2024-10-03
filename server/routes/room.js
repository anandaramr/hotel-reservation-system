const express = require('express')
const Pool = require('../database/pool')
const { authorize } = require('../utils')
const router = express.Router()


router.post('/book/:roomNo', authorize, async (req,res) => {
    const interval = req.body.interval;
    if(!interval || interval<=0) return res.status(400).json({ error: "Invalid req.body.interval" });
    
    let start = req.body.start ? new Date(req.body.start) : new Date()
    if(start<new Date()) return res.status(400).json({ error: "Invalid start date" });
    
    let expiry = new Date(start);
    expiry.setDate(expiry.getDate() + interval - 1);
    
    start = start.toISOString().slice(0,10)
    expiry = expiry.toISOString().slice(0,10)
    
    const result = await Pool.query('SELECT * FROM ORDERS WHERE ROOMNO=? AND (STARTDATE BETWEEN ? AND ? OR ? BETWEEN STARTDATE AND EXPIRYDATE) AND CANCELLED IS NULL',
        [req.params.roomNo, start, expiry, start]
    )
    if(result[0].length>0) return res.status(400).json({ error: "Room already booked" });
    
    const pricePerNight = await Pool.query('SELECT pricePerNight FROM ROOMS WHERE ROOMNO=?', [req.params.roomNo])
    .then(result => {
        if(!result[0][0]) return res.status(400).json({ error: "Room not found" });
        return result[0][0].pricePerNight
    })

    Pool.query('INSERT INTO ORDERS(USERID, ROOMNO, TOTALPRICE, STARTDATE, EXPIRYDATE) VALUES(?,?,?,?,?)',
        [res.user.userId, req.params.roomNo, pricePerNight * interval, start, expiry]
    )
    .then(() => {
        res.status(201).json({ message: "Booking successful" })
    })
    .catch(err => res.status(400).json({ error: err.message}))
})

router.post('/cancel/:orderId', authorize, (req,res) => {
    Pool.query('UPDATE ORDERS SET CANCELLED=NOW() WHERE ORDERID=? AND USERID=? AND CANCELLED IS NULL', [req.params.orderId, res.user.userId])
    .then(result => {
        const msg = result[0]
        if(msg.affectedRows==0) return res.status(200).json({ error: "Could not cancel order. Please check if order is valid or if valid access token was given" })
            res.status(201).json(result)
    })
})

router.get('/search', (req,res) => {
    const start = new Date(req.query.start).toISOString().slice(0,10)
    const expiry = req.query.expiry ? new Date(req.query.expiry).toISOString().slice(0,10) : start
    const interval = (new Date(expiry) - new Date(start)) / (1000 * 60 * 60 * 24) + 1
    
    if(new Date(start)=='Invalid Date' || new Date(expiry)=='Invalid Date')
        return res.status(400).json({ error: 'Invalid start/expiry date format (YYY-MM-DD)'});
    
    if(expiry<start) return res.status(400).json({ error: "Expiry date should not be before start date"})

    Pool.query(`SELECT roomNo, pricePerNight, roomType, isAc FROM ROOMS WHERE ROOMNO NOT IN(SELECT ROOMNO FROM ORDERS WHERE CANCELLED IS NULL AND (? BETWEEN STARTDATE AND EXPIRYDATE OR STARTDATE BETWEEN ? AND ?)) 
        ${req.query.isAc=="1" ? "AND ISAC=1" : ""} ${req.query.isAc=="0" ? "AND ISAC=0" : ""} ${req.query.roomType ? 'AND ROOMTYPE=?' : ''}`,
        [ start, start, expiry, req.query.roomType ]
    ).then(result => {
        const rows = result[0].map(item => {return { ...item, totalPrice: item.pricePerNight * interval }})
        res.status(200).json(rows)
    }).catch(err => res.status(400).json({ error: err.message }))
})

router.get('/orders', authorize, (req,res) => {
    Pool.query(`SELECT * FROM ORDERS WHERE USERID=? ${req.query.active=="true" && 'AND CANCELLED IS NULL AND EXPIRYDATE>=CURDATE()'}`, [res.user.userId])
    .then(result => {
        res.status(200).json(result[0])
    })
})

router.get('/:roomNo', (req,res) => {
    Pool.query(`SELECT * FROM ROOMS WHERE ROOMNO=?`, [req.params.roomNo])
    .then(result => {
        res.status(200).json(result[0][0])
    })
})

module.exports = router