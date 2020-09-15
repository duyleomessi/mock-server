const express = require('express')
const app = express()
const fe_message = require('./fe_data')

app.post("/", (req, res) => {
    return res.status(200).json(fe_message)
})

app.listen(3003, function () {
    console.log("server listen on port 3003")
})


