// packages
import express, { Router } from 'express'

// zod validation schema
import { formDataSchema } from '../schema/formDataSchema'

// middlewares
import { validate } from '../middleware/formValidator'

// controllers
import {
	extDeleteController,
	extInsertController,
	extListController,
} from '../controller/apiController'

// get express router
const router: Router = express.Router()

// routes
/**
 * fetch-all extensions
 */
router.get('/extensions', extListController)

/**
 * insert single extension
 */
router.post('/extension', validate(formDataSchema), extInsertController)

/**
 * delete single extension
 */
router.delete('/extension', validate(formDataSchema), extDeleteController)

// export router
export default router
