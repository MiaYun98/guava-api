const router = require('express').Router();
const apiRoutes = require('./api');
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
    res.send("this is the homepage")
})

router.get("/token", (req, res) => {
    const token = jwt.sign({
        name: "joe",
        job: "teacher"
    }, process.env.JWT_SECRET, {
        expiresIn: "2h"
    })
    res.json({
        token
    })
})

router.get("/readtoken", (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const tokenData = jwt.verify(token, process.env.JWT_SECRET)
        console.log(tokenData)
        res.json("okay")
    } catch (err) {
        console.log(err)
        res.status(500).json({meg: "an error occur" , err})
    }    
})

// profile, userlogin, userSignup are all in here
router.use('/api', apiRoutes);

module.exports = router;
