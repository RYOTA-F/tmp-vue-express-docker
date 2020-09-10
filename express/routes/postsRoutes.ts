import Express from 'express'
import postsController from '../controllers/postsController'

const router = Express.Router()

router.get('/', postsController)

export default router
