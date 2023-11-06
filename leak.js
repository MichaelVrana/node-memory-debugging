import { randomBytes } from "crypto"

let buffers = []

const second = 1000
const megabyte = 2 ** 20

export const startLeaking = () =>
    setInterval(() => {
        const buffer = randomBytes(100 * megabyte)
        buffers.push(buffer)
    }, second)
