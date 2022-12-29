// packages
import { Request, Response } from 'express'

// logger
import logger from '../../winston/winston.js'

// utilities

/**
 * fetch-all extensions controller
 */
const extListController = async (req: Request, res: Response): Promise<void> => {}

/**
 * insert single extension controller
 */
const extInsertController = async (req: Request, res: Response): Promise<void> => {}

/**
 * delete single extension controller
 */
const extDeleteController = async (req: Request, res: Response): Promise<void> => {}

// export controllers
export { extListController, extInsertController, extDeleteController }
