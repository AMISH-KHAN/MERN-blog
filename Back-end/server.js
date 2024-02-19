const express = require("express")



// routs
const postRouter=require("./controller/postroutes")


const PORT=process.env.PORT||3000

const app = express()
app.use(express.json())
app.use("/public",express.static("public"))


require("./dbconnect")

app.use("/api/", postRouter)

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})