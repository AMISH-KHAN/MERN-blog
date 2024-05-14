const express = require("express")
const user = require("../models/user")

const router = express.Router()


router.post("/", async (req, res) => {
    try {
        // console.log(req)
        let data = new user(req.body)
        await data.save()
        res.send({result:"done",message:"data is stored"})
    }
    catch (error) {
        res.send({result:"internal server error",message:error})
        
    }
})

router.post("/login", async (req, res) => {
    try {
        const {email,password} =req.body
        let data = await user.findOne({ email: email })
        if (data) {
            if (data.password === password) {
                console.log("password match")
            }
            else {
                throw new Error("password not match")
            }
        }
        else {
            throw new Error("no User found")
        }
    }
    catch (error) {
        console.log(error)
        res.send({result:"internal server error",message:error})
        
    }
})


router.get("/", async (req, res) => {
    try {
        console.log("data",req.body)
        // let data = await user.find()
        // console.log("at routes")
        // res.send({result:"done",message:data,total:data.lenght})
    }
    catch(error) {
        res.send({result:"internal server error",message:error})
    }
})

module.exports=router