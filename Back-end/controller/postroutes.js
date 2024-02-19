const express = require("express")
const post = require("../models/post")

const router = express.Router()


router.post("/", async (req, res) => {
    try { 
        let data = new post(req.body)
        await data.save()
        res.send({result:"done",message:"data is stored"})
    }
    catch (error) {
        res.send({result:"internal server error",message:error})
        
    }
})


router.get("/", async (req, res) => {
    try {
        let data = await post.find()
        console.log("at routes")
        res.send({result:"done",message:data,total:data.lenght})
    }
    catch(error) {
        res.send({result:"internal server error",message:error})
    }
})

module.exports=router