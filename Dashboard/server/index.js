import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";


dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.DB_URL,)
.then(()=>console.log('DB Connected:'))
.catch((err)=> console.log('DB Error', err))



app.get("/", (req, res) => {
    res.send("Etsy Dashboard");
})


app.listen(process.env.PORT , (err) => {
    if(err){
        return console.error(err);
    }
    console.log("Server Connected");
})