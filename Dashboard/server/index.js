import express from "express";
import dotenv from "dotenv";


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