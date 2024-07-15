import express from "express"
import {mongoose} from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
const app = express()
import cookieParser from "cookie-parser"
const port = 8000

dotenv.config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// const corsOptions = {
//   origin: 'http://localhost:3001',
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
//   credentials: true,
//   allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
// };

// app.use(cors(corsOptions))
app.use(cors())
app.use(express.json());
app.use(cookieParser())

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
    console.log(`Serer is running on ${port}`);
}).catch(err => console.log(err))


import portfolio from "./Routes/portfolio.route.js"
import user from "./Routes/user.route.js"
app.use('/api/v1', portfolio)
app.use('/api/v1', user)