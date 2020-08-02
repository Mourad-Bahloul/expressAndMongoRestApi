require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL,
    { useNewUrlParser: true, useUnifiedTopology: true})
db = mongoose.connection

db.on('error', (error) => console.log('error while connecting to database', error))
db.once('open', () => console.log('Database is connected'))

// set up server to accept json:
app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('Server started'))

