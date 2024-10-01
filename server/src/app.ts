import Express from 'express'
import userRoutes from './router/User'
import roleRoutes from './router/Role'
import loginRoutes from './router/login'

import cors  from 'cors'
import morgan from 'morgan'

// import authenticateToken from "./midleware/authenticate"

const app = Express()
app.use(morgan('dev'))
app.use(Express.json())
app.use(cors())
app.use('/login', loginRoutes)
app.use('/role', roleRoutes)
app.use('/user', userRoutes)

export default app
