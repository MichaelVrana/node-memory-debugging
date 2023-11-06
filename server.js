import express from "express"

const echo = (req, res) => req.pipe(res)

const server = express()

server.post("/echo", echo)

const port = 3000

export const startServer = () =>
    new Promise((resolve) =>
        server.listen(port, () => {
            console.log(`Server is listening at port ${port}`)
            resolve()
        })
    )
