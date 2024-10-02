const mysql = require('mysql2')
require('dotenv').config()

const Pool = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    dateStrings: true
}).promise()

module.exports = Pool