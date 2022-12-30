import { writable, type Writable } from 'svelte/store'

type Toast = {
  id: string
  type: 'success' | 'danger'
  isOpen: boolean
  timeout: number
  message: string
}

export const toasts: Writable<Array<Toast>> = writable([])

export const addToast = (toast: Omit<Toast, 'id'>) => {
  // create unique id
  const id = Math.random().toString(36)

  // push toast
  toasts.update((all) => [{ id, ...toast }, ...all])

  // timeout dismiss
  setTimeout(() => {
    dismissToast(id)
  }, toast.timeout)
}

export const dismissToast = (id: string) => {
  toasts.update((all) => all.filter((toast) => toast.id !== id))
}
