const express = require("express")
var cors = require('cors')


// routs
const postRouter=require("./controller/postroutes")
const userRouter=require("./controller/userroutes")

const PORT=process.env.PORT||3000

const app = express()
app.use(express.json())

app.use(cors())
app.use("/public",express.static("public"))


require("./dbconnect")

app.use("/api/", postRouter)
app.use("/api/user", userRouter)

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})