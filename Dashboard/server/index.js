import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { loginValidation, registerValidation } from "./validations/validations.js";
import { login,register,getMe } from "./controllers/UserController.js";
import handleValidationErrors from "./utils/handleValidationErrors.js";

import checkAuth from './utils/checkAuth.js'
import { create } from "./controllers/Product/ProductController.js";


dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.DB_URL,)
.then(()=>console.log('DB Connected:'))
.catch((err)=> console.log('DB Error', err))



app.get("/", (req, res) => {res.send("Etsy Dashboard")})


app.post("/login", loginValidation,handleValidationErrors,login)
app.post("/register", registerValidation,handleValidationErrors,register)
app.get('/me',checkAuth,getMe)

app.post("/create", checkAuth , create)


app.listen(process.env.PORT , (err) => {
    if(err){
        return console.error(err);
    }
    console.log("Server Connected");
})