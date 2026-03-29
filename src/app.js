import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()
                              //backend me kis kis jgh((frontend) se req accept krni h uske liye cors middleware use krte h, jisse hum origin specify kr skte h ki kis kis jgh se req accept krni h, aur credentials true krne se cookies bhi accept kr lega
app.use(cors({
    origin: process.env.CORS_ORIGIN, 
    credentials: true


}))

app.use(express.json({limit:"16kb"})); // for parsing application/json(form data ke liye)
app.use(express.urlencoded({extended:true, limit:"16kb"})); // for parsing application/x-www-form-urlencoded extended se object ke andr object pass kr skte h, aur limit se data size limit kr skte h
app.use(express.static("public")); // for serving static files from public folder(images , pdf etc)
app.use(cookieParser()); // server se jo user ka browser hai uske andr jo cookies h unko access krne ke liye cookie parser middleware use krte h, jisse hum cookies ko read kr skte h aur set kr skte h(secure cookies jise sirf server access kr skta h)
export { app }