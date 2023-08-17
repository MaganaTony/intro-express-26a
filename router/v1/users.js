import { Router } from "express"
const router = Router()

const users = [
    {id: 1, name: "Antonio", lastName: "Magana"},
    {id: 2, name: "Rafael", lastName: "Quintero"}
]

router.get("/users", (request, response) => {
    response.send(users)
})

export default router