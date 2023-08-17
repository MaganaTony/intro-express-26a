const express = require("express")
const router = express.Router()

const users = [
    {id: 1, name: "Antonio", lastName: "Magana", age:26},
    {id: 2, name: "Rafael", lastName: "Quintero", age:36}
]

router.get("/users", (request, response) => {
    response.send(users)
})

router.get("/users/:userID", (request, response) => {
    console.log(request);
    const userID = request.params.userID

    const findUser = users.find((user) => user.id == userID)

    if(!findUser){
        response.send({error : `Usuario con el id ${userID} no encontrado`})
    }
    response.send(findUser)
})

module.exports = router