require('dotenv/config')
const express = require('express')
const massive = require('massive')

const app = express()
const ctrl = require('./controller')
const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is connected')
})


app.listen(SERVER_PORT, () => console.log('Port is on', SERVER_PORT))

