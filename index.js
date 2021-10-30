const express = require('express')
const app = express()

const db = require('./config/db')
const consign = require('consign')
const nodemon = require('nodemon')

app.get('/', (req, res) => {
    res.status(200).send('Meu Backend')
})

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)
    
app.db = db

app.listen(3000, () => {nodemon
    console.log('Backend executando...')
})
