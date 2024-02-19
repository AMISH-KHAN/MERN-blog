const mongoose = require("mongoose")

const { Schema } = mongoose

// making schema for posts
const postSchema = new Schema({
    title: String,
    body: String,
    author: String,
    date: { type: Date, default: Date.now },
    pic: { type: String, default: "" }
})

// making model out of the schema
const Post = mongoose.model("Post", postSchema)

module.exports=Post