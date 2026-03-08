// require('dotenv').config({path:'./env'});

import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";



dotenv.config({
     path: "./.env" 
}); // root directory me env variable h vahi se sb data lena h
// console.log(process.env.MONGO_URI);

connectDB();





/*
import express from "express";
const app= express();


(async ()=>{
    try{
      await mongoose.connect(`{process.env.MONGO_URI}/${DB_NAME}`);
      app.on("error", (error)=>{
        console.log("Error connecting to database", error);
        throw error;
      });

      app.listen(process.env.PORT, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
      })
    }
    catch(error){
        console.log("Error connecting to database", error);
        throw error;
    }
})()

*/