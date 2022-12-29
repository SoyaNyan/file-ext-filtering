// packages
import Sequelize, {
	Model,
	InferAttributes,
	InferCreationAttributes,
	CreationOptional,
} from 'sequelize'

// database connection
import { sequelize } from '../mariadb'

// model
export class ExtModel extends Model<InferAttributes<ExtModel>, InferCreationAttributes<ExtModel>> {
	declare idx: CreationOptional<number>
	declare ext: string
}

// model init
ExtModel.init(
	{
		idx: {
			type: Sequelize.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		ext: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		},
	},
	{
		sequelize,
		modelName: 'ExtModel',
		tableName: 'extensions',
	}
)
