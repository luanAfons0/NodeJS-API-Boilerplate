import express from 'express'
import userController from '../controllers/user-controller.js'

const userRoutes = express.Router()

userRoutes.get('/get-all-users', userController.getAllUsers)

export default userRoutes
