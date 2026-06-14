import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import postRoutes from "./routes/posts.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(postRoutes);
app.use(userRoutes);
app.use(express.static('uploads'));

const start = async()=>{
    const connectDB = await mongoose.connect("mongodb+srv://Himanshusingh:Himanshu1234@linkeninconnect.gl20ft8.mongodb.net/?retryWrites=true&w=majority&appName=LinkenInconnect")

    app.listen(9080 ,()=>{
        console.log("Server is running on port 9080");
    })
}

start();


//npm run dev