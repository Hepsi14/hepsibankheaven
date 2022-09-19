import express from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import cors from 'cors';
import bank from './route.js'

const App=express();
App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended:true}))
App.use(bodyParser.text())

App.use(cors());


App.use('/api/bank',bank);

mongoose.connect('mongodb://localhost/bank')
.then(()=>console.log('db connected'))
.catch((e)=>console.log('error'))
const port=process.env.PORT||1000;

App.listen(port,()=>{console.log("server is running on port 3000")})