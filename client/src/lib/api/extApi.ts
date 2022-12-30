// packages
import axios from 'axios'
import { get } from 'svelte/store'
import { extList } from '../../store/extStore'
import { addToast } from '../../store/toastStore'
import { socket } from '../../store/socket'

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
        // toast
        addToast({
          type: 'danger',
          isOpen: true,
          timeout: 5000,
          message,
        })
      }
    })
    .catch((e) => {
      // toast
      addToast({
        type: 'danger',
        isOpen: true,
        timeout: 5000,
        message: '차단된 확장자 목록을 불러오는데 실패했습니다.',
      })
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

        // toast
        addToast({
          type: 'success',
          isOpen: true,
          timeout: 5000,
          message: `${ext}을(를) 차단할 확장자에 추가했습니다.`,
        })

        // emit 'updateAction' event
        get(socket).emit('updateAction')
      } else {
        // toast
        addToast({
          type: 'danger',
          isOpen: true,
          timeout: 5000,
          message,
        })
      }
    })
    .catch((e) => {
      // toast
      addToast({
        type: 'danger',
        isOpen: true,
        timeout: 5000,
        message: '차단할 확장자 추가에 실패했습니다.',
      })
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

        // toast
        addToast({
          type: 'success',
          isOpen: true,
          timeout: 5000,
          message: `${ext}를 차단된 확장자에서 제거했습니다.`,
        })

        // emit 'updateAction' event
        get(socket).emit('updateAction')
      } else {
        // toast
        addToast({
          type: 'danger',
          isOpen: true,
          timeout: 5000,
          message,
        })
      }
    })
    .catch((e) => {
      // toast
      addToast({
        type: 'danger',
        isOpen: true,
        timeout: 5000,
        message: '차단한 확장자 제거에 실패했습니다.',
      })
    })
}

export { getExtList, addExt, removeExt }
