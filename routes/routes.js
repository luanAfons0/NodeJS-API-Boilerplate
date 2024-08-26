import express from 'express'
import userRoutes from './user-routes.js'
import healthCheckRoute from './health-check-route.js'

const router = express.Router()

router.use(userRoutes)
router.use(healthCheckRoute)

export default router
