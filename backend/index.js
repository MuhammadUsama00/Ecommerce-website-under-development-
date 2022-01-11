import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import morgan from 'morgan'
import connectDB from './config/database.js'
import ProductRoute from './routes/products.js'
import{notFound,errorHandler} from './middleware/handler.js'
const app=express();
dotenv.config();
connectDB();
app.use(morgan('tiny'))
app.use(cors());
app.get("/api",(req,res) => {
    return res.json("API IS WORKING at port 5000 perfectly")
})
app.use("/api/products", ProductRoute);
app.use(notFound)
app.use(errorHandler)
let port=process.env.NODE_PORT || 5000
app.listen(port,()=>{
    console.log(colors.yellow(`APP is running in ${process.env.NODE_ENV} mood at port ${port}`))
})



