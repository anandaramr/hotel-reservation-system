const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const authRouter = require('./routes/auth')
app.use('/api/auth', authRouter)

const userRouter = require('./routes/user')
app.use('/api/user/', userRouter)

app.listen(3000, () => {
    console.log('Listening at 3000')
})