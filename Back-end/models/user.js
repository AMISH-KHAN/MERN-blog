const mongoose = require("mongoose")

const { Schema } = mongoose

// making schema for users
const userSchema = new Schema( {
       
        name: {
            type: String,
            required:[true,"user must provide name"]
    },
    email: {
        type: String,
        required:[true,"user must provide email"]
        },
    password: {
        type: String,
        required:[true,"user must provide email"]
        },
        pic:String
    }
)

// making model out of the schema
const user = mongoose.model("user", userSchema)

module.exports=user