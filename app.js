import express from 'express'
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/user-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";

const CONNECTION_STRING = "mongodb+srv://tuiter-app:t0ACh19cGC4NJ0CG@cluster0.dvfcwmn.mongodb.net/?retryWrites=true&w=majority"

// const CONNECTION_STRING = 'mongodb://localhost:27017/tuiter'

mongoose.connect(CONNECTION_STRING)

const app = express()
app.use(cors())
app.use(express.json())

TuitsController(app);
HelloController(app)
UserController(app)

// app.listen(4000)
app.listen(process.env.PORT || 4000);


// const express = require('express')
// const app = express()
//
//
//
// app.get('/hello', (req,res) => {
// 	// console.log("hello world!")
// 	res.send("hello world")
// })
//
// app.post('', () => {})
// app.delete('/hello', (req, res) => {
// 	res.send("deleting")
// })
// app.put('', () => {})
//
//
// app.listen(4000)



