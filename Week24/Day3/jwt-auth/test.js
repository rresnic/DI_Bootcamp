const jwt = require("jsonwebtoken");

/** 
 * jwt.sign(
 * payload,
 * token-secret-code
 * {expire time}
 * ) 
 * to create token
 */

const expireTime = Math.floor(Date.now() /1000) + 15*60;
console.log(expireTime);
const myToken = jwt.sign(
    {userid:123, name:"john"},
    "mySecretKey",
    {expiresIn: "10s"}
)
console.log(myToken)
const expiredToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEyMywibmFtZSI6ImpvaG4iLCJpYXQiOjE3MzY4NzIxMzUsImV4cCI6MTczNjg3MjE0NX0.BNL_pykIgM33e7Pw5BFzflEtB2a0s8vC55qW72GSk84"

/**
 * jwt.verify(
 * token,
 * secret,
 * (err, decode)= {}) // err, payload
 */
jwt.verify(expiredToken,
    "mySecretKey",
    (err, decode) => {
        if(err){
            console.log(err.message)
        }
        else {
            console.log(decode)
        }
    }
)