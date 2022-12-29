// logger
import logger from '../../winston/winston.js'

// model
import { ExtModel } from '../model/extModel'

// log
logger.info(`[Sequelize] Create extensions table...`)

// create table
const createExtensionTable = async () => {
	await ExtModel.sync({ force: true })
		.then(() => {
			logger.info(`[Sequelize] ✅extensions table created!`)
		})
		.catch((e) => {
			logger.error(`[Sequelize] ❗️Error occured when creating extensions table...`)
		})
}

createExtensionTable()
