// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()









/*          this is approach #1 to connect db
 
// IIFE -> use seicolon in professional 

import express from "express";
const app = express()

;(async () => {
    try{
        await mongoose.connect(`${process.env.MONGOOSE_URI}/${DB_NAME}`)
        app.on("error", ()=>{
            console.error("Error in server")
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    }catch(error){
        console.log(error)
        throw error
    }
})()
*/