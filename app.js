/* eslint no-undef: 0 */
import 'dotenv/config.js'
import express from 'express'
import routes from './routes/routes.js'
import middleWares from './middlewares/middlewares.js'

const app = express()

app.use(middleWares)
app.use('/api/v1', routes)

app.listen(process.env.PORT, () => {
    console.log(`Server started at port ${process.env.PORT}`)
})
