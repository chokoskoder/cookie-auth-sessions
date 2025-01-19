const express = require('express');
const router = express();

router.use(express.json());

router.get('/checker' , (req , res)=>{
    console.log("this path works fine");
});

router.get('/profile' , async (req,res)=>{

});

router.put('/profile' , async (req,res)=>{

});

router.get('/security-settings' , async (req,res)=>{

});

router.patch('/security-settings' , async (req,res)=>{

});

router.get('/sessions' , async (req,res)=>{

});

router.delete('/sessions' , async (req,res)=>{

});

router.get('/activity-log' , async (req,res)=>{

});

module.exports = router;





