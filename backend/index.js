const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()


const app = express()


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log('DB connected')).catch((err) => console.log('DB connection error', err))

app.use(cors({origin: true, Credential: true}))
app.use(morgan('dev'))

const testRoute = require('./route/Page')
app.use('/', testRoute)


const port = process.env.PORT || 8000


const server = app.listen(port, () => console.log(`server running on port: ${port}`))