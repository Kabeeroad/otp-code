import express from "express"
const createOtp = express.Router()
import {OTP}  from "./database/main.js"

createOtp.post("/",async (req,res)=>{
    const data = req.body
    const newToken = new OTP({
        user_time:data.time,
        token:"19018290812",
        code:"11223344"
    })
    await newToken.save()
    console.log(data)
    return res.json({"you are here":"done"})
})

export default createOtp