// require('dotenv').config({path: './env'})
import 'dotenv/config'
import connectDB from "./db/index.js"
import {app }from "./app.js"
// dotenv.config({
//     path: './env'
// })
//2nd approach
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`App is listening on port ${process.env.PORT} `);
    })
    
})
.catch(error => console.log("MongoDB connection FAILED ", error))



/*//1st approach
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()*/
