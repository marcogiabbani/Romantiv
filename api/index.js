const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
require('dotenv').config()

const apiRouter = require('./routes/api')

const app = express();

require('./db');

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api', apiRouter)

app.listen()