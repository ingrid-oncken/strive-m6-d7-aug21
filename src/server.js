import express from "express"
import listEndpoints from "express-list-endpoints"
import mongoose from "mongoose"
import cors from "cors"

const server = express()

const port = process.env.PORT || 3001

// ********************************* MIDDLEWARES ***************************************

server.use(cors())
server.use(express.json())

// ********************************* ROUTES ********************************************

// ********************************* ERROR HANDLERS ************************************

mongoose.connect(process.env.MONGO_CONNECTION)

mongoose.connection.on("connected", () => {
  console.log("Mongo Connected!")

  server.listen(port, () => {
    console.table(listEndpoints(server))

    console.log(`Server running on port ${port}`)
  })
})

mongoose.connection.on("error", err => {
  console.log(err)
})
