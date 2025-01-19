const express = require('express')
const router = express();
const authRoutes = require('../src/routes/auth.routes');
const userRoutes = require('../src/routes/user.routes');


router.use('/user' , userRoutes)
router.use('/auth' , authRoutes)


module.exports = router;