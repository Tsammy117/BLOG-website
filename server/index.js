import express from 'express';
import connectDB from './database/db.js';
const app=express();
const PORT=8000;
app.listen(PORT,()=>console.log(`server is running at ${PORT}`));
connectDB();