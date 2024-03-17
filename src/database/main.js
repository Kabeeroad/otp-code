import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()


mongoose.connect(process.env.DATABASEURL).then(()=>{
    console.log("DB Connected")
})
const otpSchema = new mongoose.Schema({
    token: String,
    user_time:Number, // user limit code exprire agr delete
    time: { type: Date, default: Date.now }, // token creation time
    code:String
});

const OTP = mongoose.model('Otp', otpSchema);


export {OTP}

