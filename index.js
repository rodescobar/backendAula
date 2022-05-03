const express = require('express')
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())


require("./routes/usuario")(app)

//MiddleWare
const middleware = require('./auth/auth')
app.use(middleware)


require("./routes/produtos")(app)

app.listen(8080, (req, res) => {
    console.log("servidor on")
})