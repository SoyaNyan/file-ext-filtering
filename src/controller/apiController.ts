// packages
import { Request, Response } from 'express'

// logger
import logger from '../../winston/winston.js'

// utilities
import { getExtList, extExists, insertExt, deleteExt } from '../utils/extApiUtils'

/**
 * fetch-all extensions controller
 */
const extListController = (_: Request, res: Response) => {
	// fetch data
	getExtList()
		.then((extList) => {
			logger.info(`[Sequelize] Extention list fetched from database.`)

			// response
			return res.status(200).json({
				success: true,
				data: extList,
			})
		})
		.catch((e) => {
			logger.error(`[Sequelize] fail to fetch extension list from database.`)

			// response
			return res.status(500).json({
				success: false,
				data: [],
				message: (e as any).errors[0].message,
			})
		})
}

/**
 * insert single extension controller
 */
const extInsertController = async (req: Request, res: Response) => {
	// get ext name
	const { ext } = req.body satisfies FormData

	// check ext already exists or not
	if (await extExists(ext)) {
		// ext exists
		logger.error(`[Sequelize] fail to add ${ext} to database.`)

		// response
		return res.status(500).json({
			success: false,
			message: `${ext} already exists.`,
		})
	}

	// insert data
	insertExt(ext)
		.then(() => {
			logger.info(`[Sequelize] ${ext} added to database.`)

			// response
			return res.status(200).json({
				success: true,
			})
		})
		.catch((e) => {
			logger.error(`[Sequelize] fail to add ${ext} to database.`)

			// response
			return res.status(500).json({
				success: false,
				message: (e as any).errors[0].message,
			})
		})
}

/**
 * delete single extension controller
 */
const extDeleteController = async (req: Request, res: Response) => {
	// get ext name
	const { ext } = req.body satisfies FormData

	// check ext already exists or not
	if (!(await extExists(ext))) {
		// ext exists
		logger.error(`[Sequelize] fail to remove ${ext} from database.`)

		// response
		return res.status(500).json({
			success: false,
			message: `${ext} not exists.`,
		})
	}

	// insert data
	deleteExt(ext)
		.then((deleted) => {
			// check deleted row
			if (deleted === 1) {
				logger.info(`[Sequelize] ${ext} removed from database.`)

				// response
				return res.status(200).json({
					success: true,
				})
			}

			// response
			return res.status(500).json({
				success: false,
				message: `Failed to remove ${ext} from database.`,
			})
		})
		.catch((e) => {
			logger.error(`[Sequelize] fail to remove ${ext} from database.`)

			// response
			return res.status(500).json({
				success: false,
				message: (e as any).errors[0].message,
			})
		})
}

// export controllers
export { extListController, extInsertController, extDeleteController }
