import { writable } from 'svelte/store'
import { io } from 'socket.io-client'

// store for socket.io
export const socket = writable(
  io('http://soya.moe:7757', {
    reconnectionDelayMax: 10000,
  })
)
