import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/userRoutes.js';
import teamRoutes from './routes/teamRoutes.js';
import connectDB from './config/db.js'; 
import cors from 'cors';

const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.use('/api/users',userRoutes);
app.use('/api/teams',teamRoutes);

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.listen(port,()=>{
    console.log(`Server is runnning on port ${port}`);
});