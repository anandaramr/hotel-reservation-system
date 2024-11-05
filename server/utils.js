const jwt = require('jsonwebtoken')
require('dotenv').config()

function authorize(req,res,next) {
    const token = req.headers.authorization?.split(" ")[1]
    if(!token) return res.status(400).json({ error: "Token not found" });

    jwt.verify(token, process.env.ACCESSKEY, (err, result) => {
        if(err) return res.status(403).json({ error: err.message });
        console.log(result)
        res.user = result
        next()
    })
}

module.exports = { authorize }