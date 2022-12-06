const express = require('express');
const router = express.Router();
const { User, Profile } = require('../../models');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


router.get('/', (req, res) => {
    User.findAll({ include: [Profile] }
    ).then(allUser =>
        res.json(allUser)
    )
})

router.get("/getuserfromtoken", (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        res.json({user:tokenData})
    } catch (err) {
        console.log(err)
        res.status(500).json({user:false})
    }
})

router.post("/login", (req, res) => {
    User.findOne({
        where: {
            userName: req.body.userName
        }
    }).then(foundUser => {
        if (!foundUser) {
            return res.status(401).json({ mes: "no match user", err })
        } else if (!bcrypt.compareSync(req.body.password, foundUser.password)) {
            return res.status(401).json({ mes: "no match user", err })
        } else {
            const token = jwt.sign({
                id: foundUser.id,
                userName: foundUser.userName,

            }, process.env.JWT_SECRET, {
                expiresIn: "2h"
            })
            return res.json({
                token,
                user: foundUser
            })
        }
    })
})

router.post('/signup', (req, res) => {
    User.create({
        userName: req.body.userName,
        password: req.body.password
    }).then(data => {
        const token = jwt.sign({
            id: data.id,
            userName: data.userName
        }, process.env.JWT_SECRET, {
            expiresIn: "2h"
        })
        return res.json({
            token,
            user: data
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({ err: err })
    })
})

module.exports = router; 