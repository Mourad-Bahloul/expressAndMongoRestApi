require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL,
    { useNewUrlParser: true, useUnifiedTopology: true})
db = mongoose.connection

db.on('error', (error) => console.log('error while connecting to database', error))
db.once('open', () => console.log('Database is connected'))

app.listen(3000, () => console.log('Server started'))

