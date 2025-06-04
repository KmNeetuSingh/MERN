const express = require('express')
const app = express()
const Port = 3000;
console.log(Port)
app.get("/health" , (req, res) => {
    res.end("Server health is good")
})

app.listen(Port , () => {
    console.log(`Server is running on http://localhost:${Port}`)
})