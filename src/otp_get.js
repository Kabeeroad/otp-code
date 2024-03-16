import express from "express"
const verifyOtp = express.Router()

verifyOtp.get("/",(req,res)=>{
    return res.json({"you are here":"done"})
})


export default verifyOtp