// packages
import { Request, Response } from 'express'

// logger
import logger from '../../winston/winston.js'

// utilities
import { getExtList, insertExt, deleteExt } from '../utils/extApiUtils'

/**
 * fetch-all extensions controller
 */
const extListController = (req: Request, res: Response) => {
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
				message: e,
			})
		})
}

/**
 * insert single extension controller
 */
const extInsertController = (req: Request, res: Response) => {
	// get ext name
	const { ext } = req.body satisfies FormData

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
				message: e,
			})
		})
}

/**
 * delete single extension controller
 */
const extDeleteController = (req: Request, res: Response) => {
	// get ext name
	const { ext } = req.body satisfies FormData

	// insert data
	deleteExt(ext)
		.then(() => {
			logger.info(`[Sequelize] ${ext} removed from database.`)

			// response
			return res.status(200).json({
				success: true,
			})
		})
		.catch((e) => {
			logger.error(`[Sequelize] fail to remove ${ext} from database.`)

			// response
			return res.status(500).json({
				success: false,
				message: e,
			})
		})
}

// export controllers
export { extListController, extInsertController, extDeleteController }
