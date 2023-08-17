import express from "express"
import userV1 from "./router/v1/users"
import userV2 from "./router/v2/users"

const app = express()
const port = 3000

app.use("/v1", userV1)
app.use("/v2", userV2)

app.listen(port, ()=>{
    console.log(`Aplicacion escuchando por el puerto ${port}`);
})