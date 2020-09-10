import Express from 'express'
import usersController from '../controllers/userController'

const router = Express.Router()

router.get('/', usersController)

export default router
