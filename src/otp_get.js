import express from "express"
const verifyOtp = express.Router()
import {OTP}  from "./database/main.js"
import {ISValidTime,timechecker} from "./utils.js"


verifyOtp.get("/",async (req,res)=>{
    console.log(req.query)
    if (req.query.token){
        const token = req.query.token
        const code = req.query.code
        const data =await OTP.find({token:token})
        if (data.length >= 1){
            if(data[0].code === code){
                if(ISValidTime(data[0].user_time,timechecker(data[0].time))){
                    return res.status(200).json(data[0])
                }
                else{
                    return res.status(400).json({"error":"Please Regenerate OTP"})
                }
               
            }
            else{
                return res.status(400).json({"error":"OTP Not Matched"})
            }
            
        }
        else{
            return res.status(404).json({"error":"Data Not Found"})
        }
        
    }
    else{
        return res.status(401).json({"token":"Please give token in params"})
    }

})


export default verifyOtp