// model
import { ExtModel } from '../db/model/extModel'

/**
 * fetch all ext list
 */
const getExtList = () => {
	return ExtModel.findAll({
		attributes: ['idx', 'ext'],
		order: [['idx', 'ASC']],
	})
}

/**
 * check ext already exists
 */
const extExists = (ext: string) => {
	return ExtModel.findOne({
		where: { ext },
	})
}

/**
 * insert single ext
 */
const insertExt = (ext: string) => {
	return ExtModel.create({ ext })
}

/**
 * delete single ext
 */
const deleteExt = (ext: string) => {
	return ExtModel.destroy({ where: { ext } })
}

// export utils
export { getExtList, extExists, insertExt, deleteExt }
