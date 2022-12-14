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
    ).catch(err => {
        console.log(err)
    })
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
    let hungerval; 
    let hygieneval;
    let happinessval;
    let energyval;
    if(req.body.hunger < 0) {
        hungerval = 0
    } else if (req.body.hunger > 100) {
        hungerval = 100
    } else {
        hungerval = req.body.hunger
    }

    if(req.body.hygiene < 0) {
        hygieneval = 0
    } else if (req.body.hygiene > 100) {
        hygieneval = 100
    } else {
        hygieneval = req.body.hygiene
    }

    if(req.body.happiness < 0) {
        happinessval = 0
    } else if (req.body.happiness > 100) {
        happinessval = 100
    } else {
        happinessval = req.body.happiness
    }

    if(req.body.energy < 0) {
        energyval = 0
    } else if (req.body.energy > 100) {
        energyval = 100
    } else {
        energyval = req.body.energy
    }

    Shrub.update({
        name: req.body.name,
        level: req.body.level,
        hunger: hungerval,
        hygiene: hygieneval,
        happiness: happinessval,
        energy: energyval,
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
