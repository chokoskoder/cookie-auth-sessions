const express = require('express');
const router = express();

router.use(express.json());

router.get('/checker' , (req , res)=>{
    console.log("this path works fine");
});

router.post('/register' , async (req,res)=>{
    //create new user

})

router.post('/login' , async (req , res)=>{
    //login an existing user
})

router.get('/verify-email' , async (req , res)=>{
    //With token as query param (/verify-email?token=xyz)
})

router.post('/verify-otp' , async (req,res)=>{
    //submit an otp for verification

})

router.post('/resend-verification' , async (req , res)=>{
    //self explanatory
})

router.post('/logout' , async (req,res)=>{

});

router.get('/session-status' , async (req,res)=>{
    //get the session status
})

module.exports = router;