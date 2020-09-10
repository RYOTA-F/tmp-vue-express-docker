import Express from 'express'
import userRoutes from './userRoutes'
import postsRoutes from './postsRoutes'

const router = Express.Router()

router.use('/users', userRoutes)
router.use('/posts', postsRoutes)

export default router
