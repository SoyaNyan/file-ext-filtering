// packages
import swaggerAutogen from 'swagger-autogen'

// swagger setting
const doc = {
	swaggerDefinition: {
		info: {
			title: 'File Extension Filtering API',
			version: '1.0.0',
			description: 'Api for backend file serer.',
		},
		host: 'localhost:7757',
		schemes: ['http'],
	},
}

// output setting
const outputFile = './swagger/swagger-output.json'
const endpointsFiles = ['./app.js']

// init swagger
swaggerAutogen()(outputFile, endpointsFiles, doc)
