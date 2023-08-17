const express = require('express')
const app = express()
const port = 3000

app.get("/", (request, response) => {
    response.send({message: "Intro Express - 26a" })
})

app.listen(port, ()=>{
    console.log("Aplicacion escuchando por el puerto" + port);
})