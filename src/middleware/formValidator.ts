// packages
import { Request, Response, NextFunction } from 'express'
import { AnyZodObject } from 'zod'

// validate form data
export const validate =
	(schema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
		// get request data
		const { body, query, params } = req

		// validate data
		try {
			await schema.parseAsync({
				body,
				query,
				params,
			})

			// valid
			return next()
		} catch (e) {
			// invalid
			return res.status(400).json(e)
		}
	}
