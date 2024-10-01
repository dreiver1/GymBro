import { Router } from "express"
import userController from "../controller/User"

const app = Router()
const controler = new userController()

app.post('/', controler.loginUser)
app.post('/refresh', controler.refreshTokens)
app.post('/singin', controler.post)
  

export default app