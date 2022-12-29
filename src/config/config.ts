// packages
import * as dotenv from 'dotenv'
import * as path from 'path'

// type
type ConfigType = {
	NODE_ENV: string
	SERVER_PORT: string
	DATABASE_HOST: string
	DATABASE_PORT: number
	DATABASE_NAME: string
	DATABASE_USERNAME: string
	DATABASE_PASSWORD: string
}

// get config
dotenv.config({ path: path.join(__dirname, './.env') })
const config = {
	NODE_ENV: process.env.NODE_ENV || 'dev',
	SERVER_PORT: process.env.SERVER_PORT || '3000',
	DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
	DATABASE_PORT: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT as string) : 3306,
	DATABASE_NAME: process.env.DATABASE_NAME || '',
	DATABASE_USERNAME: process.env.DATABASE_USERNAME || '',
	DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '',
} satisfies ConfigType

export default config
