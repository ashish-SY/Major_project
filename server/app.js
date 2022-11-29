const dotenv=require('dotenv');
const mongoose=require('mongoose');
const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();

dotenv.config({path: './config.env'});
require('./db/conn');
const User=require('./model/userSchema');

app.use(cookieParser())
app.use(express.json());

// link your router files 
app.use(require('./router/auth'));

const PORT= process.env.PORT;

 


// app.get('/about',middleware,(req,res) =>{
//     console.log("Hello about");
//     res.send(`about`);
// });

// app.get('/register',(req,res) =>{
//     res.send(`register page`);
// });

// app.get('/signin',(req,res) =>{
//     res.send(`login`);
// });

app.listen(PORT,()=>{
    console.log(`Server is running of port no ${PORT}`);
})