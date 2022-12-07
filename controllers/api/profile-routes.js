const express = require('express');
const jwt = require("jsonwebtoken");
const router = express.Router();
const { User, Profile, Item, Shrub } = require('../../models');

// get all /api/profile
router.get('/', (req, res) => {
    Profile.findAll({
        include: [User]
    }).then(allUser =>
        res.json(allUser)
    )
})

router.get('/item', (req, res) => {
    Profile.findAll({
        include: [Item]
    }).then(allItems => {
        res.json(allItems)
    })
})

router.get('/current-user', (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const userData = jwt.verify(token, process.env.JWT_SECRET);
        console.log(userData)
        Profile.findOne({
            where: {
                UserId: userData.id
            },
            include: [Shrub]
        }).then(profileData => {
            console.log(profileData)
            res.json(profileData)
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err })
    }
})

// get one /api/profile/:id 
router.get('/:id', (req, res) => {
    Profile.findOne({
        where: {
            id: req.params.id,
        },
    }).then(oneUser => {

        res.json(oneUser)
    })
})

router.post('/create', (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const userData = jwt.verify(token, process.env.JWT_SECRET);
        Profile.create({
            money: 0,
            days: 0,
            UserId: userData.id,
        }).then(profileData => {
            res.json(profileData)
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err })
    }
})

router.put('/update', (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const userData = jwt.verify(token, process.env.JWT_SECRET);
        Profile.update({
            money: req.body.money,
            days: req.body.days,
            UserId: userData.id,
        },
            {
                where: {
                    UserId: userData.id
                }
            }
        ).then(data => {
            res.status(200).json(data)
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err })
    }
})


module.exports = router; 