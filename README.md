# otp-code
A simple and secure REST API-based OTP (One-Time Passcode) platform built with Node.js and Express.

# Features
Generates unique, time-limited OTP codes.
Sends OTP codes via email.
Provides secure token-based OTP verification.
Optional support for customizable email templates.
API Endpoints
# 1. Creating an OTP (POST Request)

Endpoint: /api/otp
Data (JSON):
JSON
{
  "time": 5,  // OTP expiry time in minutes
  "email": "abx@gmail.com",
  "template": "your_custom_template" // Optional 
}

Response (JSON):
JSON
{
  "token": "your_generated_token"
}

# 2. Verifying an OTP (GET Request)

Endpoint: /api/otp/verify
Query Parameters:
code: The OTP code entered by the user.
token: The token returned when the OTP was generated.
Response (JSON):
JSON
{
  "status": "success" // or "failure"
}
