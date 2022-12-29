// packages
import { Request, Response, NextFunction } from 'express'
import { AnyZodObject, ZodError } from 'zod'

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
			// parse zod issues
			if (e instanceof ZodError) {
				// invalid
				return res.status(200).json({
					success: false,
					message: '확장자 이름을 다시 확인해주세요!',
				})
			}

			return res.status(400).json({
				success: false,
				message: '확장자 이름을 다시 확인해주세요!',
				error: e,
			})
		}
	}
