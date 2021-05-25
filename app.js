if (process.env.NODE_ENV != 'production'){
    require ('dotenv').config()
}
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000
const userRoutes = require('./routes/index')

app.use(express.urlencoded({extended : true}))

app.use(express.json())

app.use(cors())

app.use(userRoutes)

app.listen(PORT, (req, res) => {
    console.log(`connected to port: ${PORT}`);
})
