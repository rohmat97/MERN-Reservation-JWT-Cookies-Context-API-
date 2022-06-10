import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"


const app = express()
dotenv.config()

const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('Connected to MongoDB')
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("MongoDB Disconnected");
})

mongoose.connection.on("connected",()=>{
    console.log("MongoDB connected");
})

// middlewares

app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)

app.use((req, res, next) => {
    console.log("middleware");
});

app.get('/', (req, res) => {
    res.send("hellow");
});

app.listen(5000, () => {
    connect()
    console.log('App listening on port 5000!');
});