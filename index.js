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

const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log("servidor on")
})