import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";



mongoose.connect(process.env.DB_URL,)
.then(()=>console.log('DB Connected:'))
.catch((err)=> console.log('DB Error', err))

dotenv.config();

const app = express();


app.get("/", (req, res) => {
    res.send("Etsy Dashboard");
})


app.listen(process.env.PORT , (err) => {
    if(err){
        return console.error(err);
    }
    console.log("Server Connected");
})