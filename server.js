import cors from "cors"
import express from "express"
import frutaRouter from "./routes/fruta_routes.js"

const server = express()
server.use(express.json())
server.use(cors())
server.use('/frutas', frutaRouter) /

    server.listen(5000, () => console.log
        ("Servidor executando em http://localhost:5000"))
console.log("porta 5000 - server.js")