import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './DB/db.js'
import blogRouter from './Routes/blogRoute.js'
import serviceRouter from './Routes/serviceRoute.js'
import teamRouter from './Routes/teamRoute.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors({
    origin: ' http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))
app.use('/api',blogRouter)
app.use('/api',serviceRouter)
app.use('/api',teamRouter)

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server running at port : ${PORT}`);
})