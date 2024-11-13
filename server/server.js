import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectionDB from './configs/mongodb.js'

//App Config
const PORT=process.env.PORT ||4000
const app=express()
await connectionDB()

//Intialize Middlewares
app.use(express.json())
app.use(cors())

//API routes
app.get('/',(req,res)=>res.send("API Working"))

app.listen(PORT,()=>console.log("Server Running on port "+PORT))