import express from 'express';
const app=express();
import userRouter from './routes/userRouter.js';
import { connectDB } from './db.js';
import cors from 'cors';
import 'dotenv/config'


app.use(cors())
app.use(cors({origin: '*'}));

app.use(express.json());
express.urlencoded({extended:true});



app.use('/api/user',userRouter);

connectDB();

const port=process.env.PORT;

app.listen(port,()=>{
    console.log('server started at 4000 port')
})
