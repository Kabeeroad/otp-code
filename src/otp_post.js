import express from "express"
const createOtp = express.Router()

createOtp.post("/",(req,res)=>{
    return res.json({"you are here":"done"})
})

export default createOtp