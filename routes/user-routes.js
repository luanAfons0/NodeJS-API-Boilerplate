import express from 'express'

const userRoutes = express.Router()

userRoutes.get('/get-all-users', (req, res) => {
    res.status(200).send({ message: 'teste' })
})

export default userRoutes
