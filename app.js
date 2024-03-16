import express from "express"
import verifyOtp from "./src/otp_get.js"
import createOtp from "./src/otp_post.js"
const app = express()
const port = 3000
app.use("/api/otp/verify",verifyOtp)
app.use("/api/otp",createOtp)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

