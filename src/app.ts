// packages
import express, { Request, Response } from 'express'
import { readFileSync } from 'fs'
import cors from 'cors'

// database
import { sequelize } from './db/mariadb'

// swagger
import swaggerUi from 'swagger-ui-express'
// import swaggerOutput from './swagger/swagger-output.json' assert { type: 'json' }
const swaggerOutput = JSON.parse(readFileSync('swagger/swagger-output.json').toString())

// swagger theme
import { SwaggerTheme } from 'swagger-themes'
const theme = new SwaggerTheme('v3')

// logger
import logger from '../winston/winston.js'

// routes
import apiRouter from './routes/apiRouter'

// get config
import config from './config/config'
const { SERVER_PORT } = config

// init express
const app = express()

// express setting
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: 'http://localhost:5193' }))

// swagger router
app.use(
	'/api-docs',
	swaggerUi.serve,
	swaggerUi.setup(swaggerOutput, { customCss: theme.getBuffer('dark') })
)

// api router
app.use('/api', apiRouter)

// any other end-points
app.use(/^\/(.*)/, function (req: Request, res: Response) {
	res.status(404).send('404 Not found.')
})

app.use(function (req: Request, res: Response) {
	res.status(500).send('500 Internal server error.')
})

// start server
app.listen(SERVER_PORT, async () => {
	logger.info(`[Express] Server is running on port:${SERVER_PORT}!`)

	// sequelize connection
	await sequelize
		.authenticate()
		.then(async () => {
			logger.info(`[Sequelize] Database connected!`)
		})
		.catch((e) => {
			logger.error(`[Sequelize] Database connection error:${e}`)
		})
})
