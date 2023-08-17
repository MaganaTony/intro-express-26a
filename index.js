const express = require('express')
const usersV1 = require("./router/v1/users")
const usersV2 = require("./router/v2/users")
const app = express()
const port = 3000

app.use("/v1", usersV1)
app.use("/v2", usersV2)

app.listen(port, ()=>{
    console.log(`Aplicacion escuchando por el puerto ${port}`);
})