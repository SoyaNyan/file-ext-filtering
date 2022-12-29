// packages
import axios from 'axios'
import { extList } from '../../store/extStore'

// type
type ExtensionData = {
  idx: number
  ext: string
}

// api root
const API_ROOT = 'http://soya.moe:7757/api'

/**
 * fetch ext list
 */
const getExtList = () => {
  axios
    .get(`${API_ROOT}/extensions`)
    .then(({ data: { success, data, message } }) => {
      if (success) {
        extList.set(data.map((item: ExtensionData) => item.ext))
      } else {
        alert(message)
      }
    })
    .catch((e) => {
      alert('데이터베이스 에러.')
    })
}

/**
 * add ext
 */
const addExt = (ext: string) => {
  axios
    .post(`${API_ROOT}/extension`, { ext })
    .then(({ data: { success, message } }) => {
      if (success) {
        getExtList()
      } else {
        alert(message)
      }
    })
    .catch((e) => {
      alert('데이터베이스 에러.')
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
    .then(({ data: { success, message } }) => {
      if (success) {
        getExtList()
      } else {
        alert(message)
      }
    })
    .catch((e) => {
      alert('데이터베이스 에러.')
    })
}

export { getExtList, addExt, removeExt }
