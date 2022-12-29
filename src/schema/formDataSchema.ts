// package
import { z } from 'zod'

// form data schema
export const formDataSchema = z.object({
	body: z.object({
		ext: z
			.string({
				required_error: 'Extension name is required!',
				invalid_type_error: 'Extension name must be a string!',
			})
			.min(1)
			.max(20)
			.regex(/^[a-zA-Z0-9]*$/)
			.trim(),
	}),
})
