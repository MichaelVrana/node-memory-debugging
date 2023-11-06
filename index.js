import { writeHeapSnapshot } from "v8"
import readline from "readline/promises"
import { startLeaking } from "./leak.js"
import { startServer } from "./server.js"

await startServer()
startLeaking()

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

while (true) {
    await rl.question("Press enter to create a heap snapshot.\n")
    rl.write("Creating heap snapshot...\n")

    writeHeapSnapshot()

    rl.write("Heap snapshot created.\n")
}
