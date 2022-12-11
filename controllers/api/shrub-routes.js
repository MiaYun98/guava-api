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
    Shrub.findOne({
        where: {
            ProfileId: req.body.ProfileId,
        },
        include: [Item]
    }).then(data => {
        res.json(data)
    }).catch(err => {
        console.log("no shrub with this user")
    })
})

router.put("/update", (req, res) => {
    Shrub.update({
        name: req.body.name,
        level: req.body.level,
        hunger: req.body.hunger,
        hygiene: req.body.hygiene,
        happiness: req.body.happiness,
        energy: req.body.energy,
        ProfileId: req.body.ProfileId
    },   
        {
            where: {
                ProfileId: req.body.ProfileId,
            }
        }
    ).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err })
    })
})

router.post('/create', (req, res) => {
    Shrub.create({
        name: req.body.name,
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

// api/shrub/getitem
router.get('/getitem', (req, res) => {
    Shrub.findOne({
        where: {
            id: req.body.id
        },
        include: [Item]
    }).then(oneItem => {
        res.json(oneItem)
    }).catch(err => {
        console.log(err)
        res.status(500).json({ msg: "error occurred", err })
    })
})

module.exports = router; 
