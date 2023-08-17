const express = require("express")
const router = express.Router()

const users = [
    {id: 1, name: "Antonio", lastName: "Magana"},
    {id: 2, name: "Rafael", lastName: "Quintero"}
]

router.get("/users", (request, response) => {
    response.send(users)
})

module.exports = router