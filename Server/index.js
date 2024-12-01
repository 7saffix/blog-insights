import express from 'express'
import dotenv from 'dotenv'
import connectDB from './DB/db.js'
import blogRouter from './Routes/blogRoute.js'
import serviceRouter from './Routes/serviceRoute.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use('/api',blogRouter)
app.use('/api',serviceRouter)

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server running at port : ${PORT}`);
})