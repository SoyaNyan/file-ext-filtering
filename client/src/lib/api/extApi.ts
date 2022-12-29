// packages
import axios from 'axios'
import { extList } from '../../store/extStore'

// type
type ExtensionData = {
  idx: number
  ext: string
}

// api root
const API_ROOT = 'http://localhost:7757/api'

/**
 * fetch ext list
 */
const getExtList = () => {
  axios
    .get(`${API_ROOT}/extensions`)
    .then(({ data: { success, data } }) => {
      if (success) {
        extList.set(data.map((item: ExtensionData) => item.ext))
      } else {
        console.log('Failed to fetch api.')
      }
    })
    .catch((e) => {
      console.log(e)
    })
}

/**
 * add ext
 */
const addExt = (ext: string) => {
  axios
    .post(`${API_ROOT}/extension`, { ext })
    .then(({ data: success }) => {
      if (success) {
        getExtList()
      } else {
        console.log('Failed to add extension.')
      }
    })
    .catch((e) => {
      console.log(e)
    })
}

/**
 * remove ext
 */
const removeExt = (ext: string) => {
  axios
    .delete(`${API_ROOT}/extension`, {
      data: { ext },
    })
    .then(({ data: success }) => {
      if (success) {
        getExtList()
      } else {
        console.log('Failed to remove extension.')
      }
    })
    .catch((e) => {
      console.log(e)
    })
}

export { getExtList, addExt, removeExt }
