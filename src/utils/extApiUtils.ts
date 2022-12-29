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
export { getExtList, insertExt, deleteExt }
