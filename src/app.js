import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))                                          // iisse jada json file mat do server mein
app.use(express.urlencoded({extended: true, limit: "16kb"}))                    // change url encoded like * + 
app.use(express.static("public"))                                               // used to store file and folder which is public assets
app.cookieParser()                                                              // used to read user cookie and server cookie    

export {app}