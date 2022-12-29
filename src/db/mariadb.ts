// packages
import { Sequelize } from 'sequelize'

// config
import config from '../config/config'

export const sequelize = new Sequelize(
	config.DATABASE_NAME,
	config.DATABASE_USERNAME,
	config.DATABASE_PASSWORD,
	{
		host: config.DATABASE_HOST,
		port: config.DATABASE_PORT,
		dialect: 'mariadb',
		timezone: '+09:00',
		pool: {
			// Connection pool
			max: 30,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
	}
)
