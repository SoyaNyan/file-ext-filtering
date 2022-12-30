import { writable, derived } from 'svelte/store'

// fixed ext list
export const fixedExts = ['bat', 'cmd', 'com', 'cpl', 'exe', 'scr', 'js']

// stores
export const extList = writable([])
export const customExtList = derived(extList, ($extList) => {
  return $extList.filter((item) => !fixedExts.includes(item))
})
export const fixedExtList = derived(extList, ($extList) => {
  return fixedExts.map((item) => {
    return {
      name: item,
      checked: $extList.includes(item),
    }
  })
})
