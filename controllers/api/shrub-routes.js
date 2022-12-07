const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User, Profile, Shrub, Item } = require('../../models');

// shrub

router.get('/', (req, res) => {
    Shrub.findAll({
        include: [Profile]
    }).then(allUser =>
        res.json(allUser)
    )
})

// api/shrubs/myshrubs
router.get("/myshrub", (req, res) => {
    try {
        Shrub.findOne({
            where: {
                ProfileId: req.body.ProfileId
            },
            include: [Item]
        }).then(shrubData => {
            res.json(shrubData)
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ mes: "no shrubs with this user" })
    }
})

router.post('/create', (req, res) => {
    Shrub.create({
        name: "Shrub",
        level: 1,
        hunger: 100,
        hygiene: 100,
        happiness: 100,
        energy: 100,
        ProfileId: req.body.ProfileId
    }).then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err })
    })
})

module.exports = router; 