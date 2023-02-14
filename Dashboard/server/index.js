import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { loginValidation, registerValidation } from "./validations/validations.js";
import { login,register,getMe } from "./controllers/UserController.js";
import handleValidationErrors from "./utils/handleValidationErrors.js";
import checkAuth from './utils/checkAuth.js'
import { create, getProduct,getProducts } from "./controllers/Product/ProductController.js";
import { createCategory, getCategories } from "./controllers/Category/CategoryController.js";


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

app.get("/products", getProducts)
app.get("/products/:id", getProduct)
app.post("/create", checkAuth , create)

app.get("/categories", getCategories)
app.post("/category", checkAuth, createCategory)


app.listen(process.env.PORT , (err) => {
    if(err){
        return console.error(err);
    }
    console.log("Server Connected");
})