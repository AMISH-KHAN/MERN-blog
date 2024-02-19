const mongoose = require("mongoose")

const dbURL = "mongodb://127.0.0.1:27017/blog"

console.log("in")

async function connectDB() {
    

// connecting with the database



// this sets an event listner and when the database is connected this line executes
mongoose.connection.on("connected", () => {
    console.log("database is running")
})

await mongoose.connect(dbURL)

// if there is any error this line execute
mongoose.connection.on("error", (error) => {
    console.error("error: ",error)
})

    mongoose.connection.on("disconected", () => {
    console.log("database is disconnected")
})

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
    });
});

}

connectDB()