import { writable, derived } from 'svelte/store'

// fixed ext list
export const fixedExts = ['bat', 'cmd', 'com', 'cpl', 'exe', 'scr', 'js']

// stores
export const extList = writable([])
export const fixedExtList = derived(extList, ($extList) => {
  return fixedExts.map((item) => {
    return {
      name: item,
      checked: $extList.includes(item),
    }
  })
})
