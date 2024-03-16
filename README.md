# otp-code
A simple and secure REST API-based OTP (One-Time Passcode) platform built with Node.js and Express.

# Features
Generates unique, time-limited OTP codes.
Sends OTP codes via email.
Provides secure token-based OTP verification.
Optional support for customizable email templates.
API Endpoints
1. Creating an OTP (POST Request)

Endpoint: `/api/otp` <br>
Data (JSON):<br>
JSON<br>
`{
  "time": 5,  // OTP expiry time in minutes
  "email": "abx@gmail.com",
  "template": "your_custom_template" // Optional 
}`
<br>
Response (JSON):<br>
JSON <br>
`{
  "token": "your_generated_token"
}`

2. Verifying an OTP (GET Request)

Endpoint: `/api/otp/verify` <br>
Query Parameters: <br>
code: The OTP code entered by the user. <br>
token: The token returned when the OTP was generated. <br>
Response (JSON):
JSON <br>
`{
  "status": "success" // or "failure"
}`
